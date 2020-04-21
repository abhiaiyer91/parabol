import {PALETTE} from 'parabol-client/lib/styles/paletteV2'
import {FONT_FAMILY} from 'parabol-client/lib/styles/typographyV2'
import {MEETING_NAME} from 'parabol-client/lib/utils/constants'
import React from 'react'

const promptStyle = {
  color: PALETTE.TEXT_MAIN,
  fontFamily: FONT_FAMILY.SANS_SERIF,
  fontSize: 24,
  fontWeight: 600,
  paddingTop: 24
}

const linkStyle = {
  color: PALETTE.EMPHASIS_WARM,
  fontFamily: FONT_FAMILY.SANS_SERIF,
  fontWeight: 600,
  textDecoration: 'none'
}

const textStyle = {
  color: PALETTE.TEXT_MAIN,
  fontFamily: FONT_FAMILY.SANS_SERIF,
  paddingTop: 4
}

interface Props {
  hasLearningLink: boolean
  isDemo: boolean
  prompt: string
  tagline: string
}
const ContactUsFooter = (props: Props) => {
  const {hasLearningLink, isDemo, prompt, tagline} = props
  if (isDemo) return null
  return (
    <>
      <tr>
        <td align='center' style={promptStyle}>
          {prompt}
        </td>
      </tr>
      <tr>
        <td align='center' style={textStyle}>
          {tagline}
        </td>
      </tr>
      <tr>
        <td align='center' style={textStyle}>
          {'Email us:'}&nbsp;
          <a href='mailto:love@parabol.co' style={linkStyle} title='Email us: love@parabol.co'>
            {'love@parabol.co'}
          </a>
        </td>
      </tr>
      {hasLearningLink && (
        <tr>
          <td align='center' style={textStyle}>
            <a
              href='https://focus.parabol.co/how-to-navigate-uncertainty-fc0dfaaf3830'
              rel='noopener noreferrer'
              style={linkStyle}
              target='_blank'
              title='Navigate uncertainty with the Parabol Rhythm'
            >
              Learn More
            </a>
            {` about the ${MEETING_NAME} Process.`}
          </td>
        </tr>
      )}
    </>
  )
}

export default ContactUsFooter