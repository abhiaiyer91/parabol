export const up = async function(r) {
  try {
    const activeUserCountQuery = r
      .table('Organization')
      .coerceTo('array')
      .map((organization) => ({
        orgId: organization('id'),
        activeUserCount: r
          .table('User')
          .getAll(
            r.args(
              r
                .table('OrganizationUser')
                .getAll(organization('id'), {index: 'orgId'})
                .filter({removedAt: null})
                .getField('userId')
                .coerceTo('array')
            )
          )
          .filter((user) => user('inactive').not())
          .count()
      }))

    const updates = (await activeUserCountQuery.run()) as {
      orgId: string
      activeUserCount: number
    }[]

    await r(updates)
      .forEach((update) => {
        return r
          .table('Organization')
          .get(update('orgId'))
          .update({activeUserCount: update('activeUserCount')})
      })
      .run()
  } catch (e) {
    console.log(e)
  }
}

export const down = async function(r) {
  try {
    await r
      .table('Organization')
      .replace((row) => row.without('activeUserCount'))
      .run()
  } catch (e) {
    console.log(e)
  }
}
