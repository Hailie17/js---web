import {getIconData} from '@/libs/utils'

export default [
  {
    iconText: getIconData('day'),
    tabText: '当天',
    path: '/'
  },
  {
    iconText: getIconData('month'),
    tabText: '近期',
    path: '/year_month'
  },
  {
    iconText: getIconData('year'),
    tabText: '当年',
    path: '/year'
  },
]