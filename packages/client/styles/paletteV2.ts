export const enum PALETTE {
  BACKGROUND_MAIN = '#F1F0FA',
  BACKGROUND_MAIN_70 = '#F5F5FC',
  BACKGROUND_PRIMARY = '#493272',
  BACKGROUND_PRIMARY_70 = '#80709C',
  BACKGROUND_PRIMARY_10A = '#4932721A',
  BACKGROUND_PRIMARY_20A = '#49327233',
  BACKGROUND_MENTION_HOVER = '#F1F0FA80',
  BACKGROUND_USER_MENTION = '#F8DEB49A',
  BACKGROUND_HIGHLIGHT = '#F8DEB49A',
  BACKGROUND_REFLECTION_FOCUSED = '#49327229',
  BACKGROUND_REFLECTION = '#49327214',
  BACKGROUND_MAIN_DARKENED = '#E0DDEC', // PRIMARY.MAIN alpha 10% over BACKGROUND.MAIN
  BACKGROUND_MAIN_LIGHTENED = '#F5F4FB', // BACKGROUND.MAIN alpha .15 over #FFF
  BACKGROUND_LIGHTEST = '#F1F0FA80',
  BACKGROUND_BACKDROP = '#4442584D', // rgba(68, 66, 88, 0.3)
  BACKGROUND_REFLECTION_STACK = '#444258B3', // rgba(68, 66, 88, 0.7)
  BACKGROUND_FORCED_BACKDROP = '#00000052',
  BACKGROUND_DARK = '#444258',
  BACKGROUND_DARK_90A = '#444258E6',
  BACKGROUND_ERROR_20A = '#ED4C5633',
  BACKGROUND_YELLOW = '#FFCC63',
  BACKGROUND_BLUE = '#329AE5',
  BACKGROUND_RED = '#ED4C56',
  BACKGROUND_PINK = '#ED4C86',
  BACKGROUND_ORANGE = '#FD6157',
  BACKGROUND_TEAL = '#55C0CF',
  BACKGROUND_GREEN = '#61BF8B',
  BACKGROUND_GRAY = '#82809A',
  BACKGROUND_TOGGLE_ACTIVE = '#4932721A',
  BACKGROUND_NAV_DARK_ACTIVE = '#3A285B',
  BACKGROUND_NAV_DARK_HOVER = '#422D67',
  BACKGROUND_NAV_LIGHT_ACTIVE = '#F2F2FB',
  BACKGROUND_NAV_LIGHT_HOVER = '#F8F8FD',
  BORDER_DASH_LIGHT = '#D9D8E1',
  BORDER_FACILITATOR_FOCUS = '#ED4C8666', // alpha 50% = 80, 40% = 66, emphasis = warm = rose/pink
  BORDER_LIGHTER = '#DFDFE5', // gray 25% over white
  BORDER_LIGHT = '#C9C2D5', // primary 30% over white // was '#C1C0CD', // gray 50% over white
  BORDER_PLACEHOLDER = '#82809AA6', // alpha 65%
  BORDER_GRAY = '#82809A80',
  BORDER_MAIN = '#493272',
  BORDER_MAIN_30 = '#C8C2D5',
  BORDER_MAIN_40 = '#B6ADC7',
  BORDER_MAIN_50 = '#A499B9',
  BORDER_NAV_DARK = '#5A4580',
  BORDER_BLUE = '#329AE5',
  BORDER_BLUE_LIGHT = '#99CDF2',
  BORDER_DARK = '#444258',
  BORDER_FIELD_FOCUS = '#6D5B8E',
  BORDER_WARM_FIELD_FOCUS = '#FE9089',
  BORDER_INVOICE_SECTION = '#DBD6E3',
  BORDER_INVOICE_LABEL = '#7C7B8A',
  BORDER_ACTIVE = '#FFCC63',
  CONTROL_MAIN = '#493272',
  CONTROL_MAIN_BACKGROUND = '#49327261',
  CONTROL_LIGHT = '#FFFFFF',
  CONTROL_LIGHT_BACKGROUND = '#9D9CA8',
  FIELD_SELECTION_WARM = '#FFDFDD',
  GRADIENT_WARM = 'linear-gradient(to right, #ED4C56 0, #ED4C86 100%)', // red to rose
  GRADIENT_WARM_DARKENED = 'linear-gradient(to right, #EC3E49 0, #EC3E7d 100%)',
  GRADIENT_WARM_LIGHTENED = 'linear-gradient(to right, #EA8288 0, #EA82A7 100%)',
  ERROR_MAIN = '#ED4C56',
  LINK_BLUE = '#329AE5',
  LINK_MAIN = '#444258',
  LINK_LIGHT = '#82809A',
  PLACEHOLDER = '#4442589a',
  PLACEHOLDER_FOCUS_ACTIVE = '#4442584d',
  PLACEHOLDER_WARM_FOCUS_ACTIVE = '#FEB0AB',
  PRIMARY_MAIN = '#493272',
  PRIMARY_LIGHT = '#8869C2',
  TAG_USER_DRAGGING = '#8869C2',
  PRIMARY_DARK = '#3F2B63',
  SERVICES_ATLASSIAN_BLUE = '#0052CC',
  STATUS_DONE = '#7C5FB0',
  STATUS_STUCK = '#FE7168',
  STATUS_FUTURE = '#55C0CF',
  STATUS_ACTIVE = '#61BF8B',
  STATUS_ARCHIVED = '#A2A1AC',
  STATUS_PRIVATE = '#FFCC63',
  TEXT_FIELD_DARK = '#363546',
  TEXT_MAIN = '#444258',
  TEXT_MAIN_DARK = '#3A384B', // mix with 15% black
  TEXT_MAIN_40A = '#44425866',
  TEXT_MAIN_HOVER = '#22212C',
  TEXT_GRAY = '#82809A',
  TEXT_GRAY_DARK = '#6F6D83', // mix with 15% black
  TEXT_LIGHT = '#F1F0FA',
  TEXT_LIGHT_DARK = '#CDCCD5', // mix with 15% black
  TEXT_GREEN = '#61BF8B',
  TEXT_ORANGE = '#FD6157',
  TEXT_ORANGE_DARK = '#D7524A', // mix with 15% black
  TEXT_RED = '#ED4C56',
  TEXT_RED_DARK = '#C94149', // mix with 15% black
  TEXT_PURPLE = '#493272',
  TEXT_BLUE = '#329AE5',
  TEXT_BLUE_DARK = '#2B83C3', // mix with 15% black
  TEXT_TOGGLE_ACTIVE = '#332350',
  TEXT_INVOICE_LABEL = '#A2A1AC',
  EMPHASIS_COOL = '#329AE5',
  EMPHASIS_COOL_LIGHTER = '#59BAFF',
  EMPHASIS_WARM = '#ED4C86'
}
