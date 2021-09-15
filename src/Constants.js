import React from 'react'
import HNCard from './cards/HNCard'
import DevToCard from './cards/DevToCard'
import ConferencesCard from './cards/ConferencesCard'
import JobsCard from './cards/JobsCard'
import ReposCard from './cards/ReposCard'
import ProductHuntCard from './cards/ProductHuntCard'
import RedditCard from './cards/RedditCard'
import LobstersCard from './cards/LobstersCard'
import HashNodeCard from './cards/HashNodeCard'
import FreeCodeCampCard from './cards/FreeCodeCampCard'
import { SiGithub } from 'react-icons/si'
import { SiYcombinator } from 'react-icons/si'
import { FaDev } from 'react-icons/fa'
import { SiProducthunt } from 'react-icons/si'
import { FaReddit } from 'react-icons/fa'
import { SiStackoverflow } from 'react-icons/si'
import { HiTicket } from 'react-icons/hi'
import HashNodeIcon from './static/icon_hashnode.png'
import LobstersIcon from './static/icon_lobsters.png'
import { FaFreeCodeCamp } from 'react-icons/fa'


const APP = {
  name: 'Hackertab.dev',
  slogan: '— Stay updated with the new technology and trends',
  repository: 'https://github.com/medyo/hackertab.dev',
  ref: 'utm_source=hackertab.dev&utm_medium=post&utm_campaign=home',
  contactEmail: 'hello@hackertab.dev',
  maxCardsPerRow: 4,
  supportLink: 'https://github.com/medyo/hackertab.dev/issues',
}

export const LOCAL_CONFIGURATION = {
  supportedTags: [], // Loaded remotly
}

export const SUPPORTED_CARDS = [
  {
    value: 'github',
    icon: <SiGithub className="blockHeaderWhite" />,
    analyticsTag: 'repos',
    label: 'Github repositories',
    component: ReposCard,
  },
  {
    value: 'jobs',
    icon: <SiStackoverflow color="#F18032" />,
    analyticsTag: 'jobs',
    label: 'Featured jobs',
    component: JobsCard,
  },
  {
    value: 'hackernews',
    icon: <SiYcombinator color="#FB6720" />,
    analyticsTag: 'hackernews',
    label: 'Hackernews',
    component: HNCard,
  },
  {
    value: 'conferences',
    icon: <HiTicket color="#4EC8AF" />,
    analyticsTag: 'events',
    label: 'Upcoming events',
    component: ConferencesCard,
  },
  {
    value: 'devto',
    icon: <FaDev className="blockHeaderWhite" />,
    analyticsTag: 'devto',
    label: 'DevTo',
    component: DevToCard,
  },
  {
    value: 'producthunt',
    icon: <SiProducthunt color="#D65736" />,
    analyticsTag: 'producthunt',
    label: 'Product Hunt',
    component: ProductHuntCard,
  },
  {
    value: 'reddit',
    icon: <FaReddit color="#FF4500" />,
    analyticsTag: 'reddit',
    label: 'Reddit',
    component: RedditCard,
  },
  {
    value: 'lobsters',
    icon: <img src={LobstersIcon} />,
    analyticsTag: 'lobsters',
    label: 'Lobsters',
    component: LobstersCard,
  },
  {
    value: 'hashnode',
    icon: <img src={HashNodeIcon} />,
    analyticsTag: 'hashnode',
    label: 'Hashnode',
    component: HashNodeCard,
  },
  {
    value: 'freecodecamp',
    icon: <FaFreeCodeCamp className="blockHeaderWhite" />,
    analyticsTag: 'freecodecamp',
    label: 'FreeCodeCamp',
    component: FreeCodeCampCard,
  },
]

export const LS_PREFERENCES_KEY = 'hackerTabPrefs'
export const LS_ANALYTICS_ID_KEY = 'hackerTabAnalyticsId'

export { APP }
