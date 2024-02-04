export type Card = {
  title: string;
  desc: string[];
  image: string;
  link: string;
};

export const cards: Card[] = [
  {
    title: 'Getting Started',
    desc: [
      'Guide to get started faster',
      'Video tutorials for beginners',
      'Moving to Bolt system',
    ],
    image: 'pages.png',
    link: 'https://github.com/DamianRuczynski',
  },
  {
    title: 'Personal Settings',
    desc: [
      'Setting up your profile',
      'Changing business name',
      'Changing email address',
    ],
    image: 'users.png',
    link: 'https://www.linkedin.com/in/damian-ruczy%C5%84ski-147b41213/',
  },
  {
    title: 'Billing',
    desc: ['Payment declined', 'Get a refund', 'Subscriptions'],
    image: 'credit_card.png',
    link: 'https://github.com/DamianRuczynski',
  },
  {
    title: 'Commerce',
    desc: ['Add products', 'Selling guide', 'Create categories'],
    image: 'statistics.png',
    link: 'https://motoave.eu/home',
  },
];
export type Info = Omit<Card, 'image'>;
export const info: Info[] = [
  {
    title: 'Community Forum',
    desc: [
      'Get help from community members, ask any questions and get answers faster.',
    ],
    link: 'Join Community',
  },
  {
    title: 'Webinars',
    desc: [
      'Join our series of webinars where you can ask questions live and see a presentation.',
    ],
    link: 'Register',
  },
];
