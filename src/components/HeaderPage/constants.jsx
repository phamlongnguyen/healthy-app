import { IconAchievement, IconCaution, IconNote } from '../../assets/icons';

export const LIST_MENU = [
  {
    label: '自分の記録',
    key: 'my-record',
  },
  {
    label: '体重グラフ',
    key: 'weight-graph',
  },
  {
    label: '目標',
    key: 'goals',
  },
  {
    label: '選択中のコース',
    key: 'selected-course',
  },
  {
    label: 'コラム一覧',
    key: 'column',
  },
  {
    label: '設定',
    key: 'settings',
  },
];

export const MENU_HEADER = [
  { label: '自分の記録', key: 'my-record', icon: <IconNote /> },
  {
    label: 'チャレンジ',
    key: 'challenge',
    icon: <IconAchievement />,
  },
  { label: 'お知らせ', key: 'notice', icon: <IconCaution /> },
];
