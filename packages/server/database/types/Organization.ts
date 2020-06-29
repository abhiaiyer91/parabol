import {TierEnum} from 'parabol-client/types/graphql'
import shortid from 'shortid'
import CreditCard from './CreditCard'

interface Input {
  id?: string
  activeDomain?: string
  isActiveDomainTouched?: boolean
  creditCard?: CreditCard
  createdAt?: Date
  name: string
  picture?: string
  tier: TierEnum
  updatedAt?: Date
  showConversionModal?: boolean
  payLaterClickCount?: number
  activeUserCount?: number
}

export default class Organization {
  id: string
  activeDomain?: string
  isActiveDomainTouched?: boolean
  creditCard?: CreditCard
  createdAt: Date
  name: string
  payLaterClickCount: number
  periodEnd?: Date
  periodStart?: Date
  picture?: string
  showConversionModal?: boolean
  stripeId?: string
  stripeSubscriptionId?: string | null
  upcomingInvoiceEmailSentAt?: Date
  tier: TierEnum
  updatedAt: Date
  activeUserCount: number
  constructor(input: Input) {
    const {
      id,
      activeDomain,
      isActiveDomainTouched,
      createdAt,
      updatedAt,
      creditCard,
      name,
      showConversionModal,
      payLaterClickCount,
      picture,
      tier,
      activeUserCount
    } = input
    this.id = id || shortid.generate()
    this.activeDomain = activeDomain
    this.isActiveDomainTouched = isActiveDomainTouched
    this.createdAt = createdAt || new Date()
    this.updatedAt = updatedAt || new Date()
    this.creditCard = creditCard
    this.name = name
    this.tier = tier
    this.picture = picture
    this.showConversionModal = showConversionModal === null ? undefined : showConversionModal
    this.payLaterClickCount = payLaterClickCount || 0
    this.activeUserCount = activeUserCount || 0
  }
}
