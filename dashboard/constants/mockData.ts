import { ROUTE } from './route'

import product1 from '../public/images/products/product_1.png'
import product2 from '../public/images/products/product_2.png'
import product3 from '../public/images/products/product_3.png'
import product4 from '../public/images/products/product_4.png'
import product5 from '../public/images/products/product_5.png'
import product from '../public/images/products/product-1.png'

export const MOCK_USERS = {
  id: '1',
  name: 'John Wick',
  avatar: 'avatar',
  email: 'email123@gmail.com',
  password: '1234Abcd',
}

export const MOCK_LIST_USERS = [
  {
    id: '1',
    name: 'John Wick',
    avatar: 'avatar',
    email: 'email123@gmail.com',
    password: '1234Abcd',
  },
  {
    id: 'o',
    name: 'Johnny',
    avatar: 'avatar',
    email: 'email1234@gmail.com',
    password: '1234Abcd',
  },
]

export const MOCK_SIDEBAR = [
  {
    id: 'GEN',
    title: 'general',
    menu: [
      {
        id: 'GEN_1',
        icon: 'home',
        title: 'Overview',
        slug: ROUTE.HOME_PAGE,
        subMenu: [],
      },
      {
        id: 'GEN_2',
        icon: 'chartBar',
        title: 'Analytics',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
      {
        id: 'GEN_3',
        icon: 'chartPie',
        title: 'Finance',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
      {
        id: 'GEN_4',
        icon: 'truck',
        title: 'Logistics',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
      {
        id: 'GEN_5',
        icon: 'user',
        title: 'Account',
        slug: ROUTE.ACCOUNT,
        subMenu: [],
      },
    ],
  },
  {
    id: 'MAN',
    title: 'management',
    menu: [
      {
        id: 'MAN_1',
        icon: 'users',
        title: 'Customers',
        subMenu: [
          {
            id: 'CUS_LIST',
            title: 'list',
            slug: ROUTE.CUSTOMER,
          },
          {
            id: 'CUS_DETAIL',
            title: 'details',
            slug: `${ROUTE.CUSTOMER}/detail`,
          },
          {
            id: 'CUS_EDIT',
            title: 'edit',
            slug: `${ROUTE.CUSTOMER}/edit`,
          },
        ],
      },
      {
        id: 'MAN_2',
        icon: 'shoppingBag',
        title: 'Products',
        subMenu: [
          {
            id: 'PROD_LIST',
            title: 'list',
            slug: ROUTE.PRODUCTS,
          },
          {
            id: 'PROD_CREATE',
            title: 'create',
            slug: `${ROUTE.PRODUCTS}/create`,
          },
        ],
      },
      {
        id: 'MAN_3',
        icon: 'shoppingCart',
        title: 'Orders',
        subMenu: [
          {
            id: 'ORD_LIST',
            title: 'list',
            slug: ROUTE.DEFAULT,
          },
          {
            id: 'ORD_DETAIL',
            title: 'details',
            slug: ROUTE.DEFAULT,
          },
        ],
      },
      {
        id: 'MAN_4',
        icon: 'receipt',
        title: 'Invoices',
        subMenu: [
          {
            id: 'INV_LIST',
            title: 'list',
            slug: ROUTE.DEFAULT,
          },
          {
            id: 'INV_DETAIL',
            title: 'details',
            slug: ROUTE.DEFAULT,
          },
        ],
      },
    ],
  },
  {
    id: 'PLAT',
    title: 'platforms',
    menu: [
      {
        id: 'PLAT_1',
        icon: 'officeBuilding',
        title: 'Job Listings',
        subMenu: [
          {
            id: 'JOB_1',
            title: 'browse',
            slug: ROUTE.DEFAULT,
          },
          {
            id: 'JOB_2',
            title: 'details',
            slug: ROUTE.DEFAULT,
          },
          {
            id: 'JOB_3',
            title: 'create',
            slug: ROUTE.DEFAULT,
          },
        ],
      },
      {
        id: 'PLAT_2',
        icon: 'share',
        title: 'Social Media',
        subMenu: [
          {
            id: 'SOCIAL_1',
            title: 'profile',
            slug: ROUTE.DEFAULT,
          },
          {
            id: 'SOCIAL_2',
            title: 'feed',
            slug: ROUTE.DEFAULT,
          },
        ],
      },
      {
        id: 'PLAT_3',
        icon: 'blog',
        title: 'Blog',
        subMenu: [
          {
            id: 'BLOG_1',
            title: 'post list',
            slug: ROUTE.DEFAULT,
          },
          {
            id: 'BLOG_2',
            title: 'post details',
            slug: ROUTE.DEFAULT,
          },
          {
            id: 'BLOG_3',
            title: 'post create',
            slug: ROUTE.DEFAULT,
          },
        ],
      },
    ],
  },
  {
    id: 'APP',
    title: 'apps',
    menu: [
      {
        id: 'KANBAN',
        icon: 'clipboard',
        title: 'kanban',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
      {
        id: 'MAIL',
        icon: 'mail',
        title: 'mail',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
      {
        id: 'CHAT',
        icon: 'chat',
        title: 'Chat',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
      {
        id: 'CALENDAR',
        icon: 'calendar',
        title: 'Calendar',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
    ],
  },
  {
    id: 'PAGES',
    title: 'pages',
    menu: [
      {
        id: 'AUTH',
        icon: 'lockClose',
        title: 'Auth',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
      {
        id: 'PRICING',
        icon: 'creditCard',
        title: 'Pricing',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
      {
        id: 'CHECKOUT',
        icon: 'cash',
        title: 'Checkout',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
      {
        id: 'CONTACT',
        icon: 'mail',
        title: 'Contact',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
      {
        id: 'ERR',
        icon: 'xCircle',
        title: 'Error',
        slug: ROUTE.DEFAULT,
        subMenu: [],
      },
    ],
  },
]

export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Dropbox',
    imageUrl: product1,
    updatedAt: 2,
  },
  {
    id: 2,
    name: 'Medium Corporation',
    imageUrl: product2,
    updatedAt: 2,
  },
  {
    id: 3,
    name: 'Slack',
    imageUrl: product3,
    updatedAt: 3,
  },
  {
    id: 4,
    name: 'Lyft',
    imageUrl: product4,
    updatedAt: 5,
  },
  {
    id: 5,
    name: 'GitHub',
    imageUrl: product5,
    updatedAt: 9,
  },
]

export const MOCK_ORDERS = [
  {
    id: 1,
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova',
    },
    createdAt: '12/04/2019',
    status: 'pending',
  },
  {
    id: 2,
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu',
    },
    createdAt: '12/04/2019',
    status: 'delivered',
  },
  {
    id: 3,
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson',
    },
    createdAt: '12/04/2019',
    status: 'refunded',
  },
  {
    id: 4,
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer',
    },
    createdAt: '12/04/2019',
    status: 'pending',
  },
  {
    id: 5,
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert',
    },
    createdAt: '12/04/2019',
    status: 'delivered',
  },
  {
    id: 6,
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov',
    },
    createdAt: '12/04/2019',
    status: 'delivered',
  },
]

export const MOCK_INVOICE = [
  {
    id: 1,
    date: '2 Jun 2021',
    total: 4.99,
  },
  {
    id: 2,
    date: '2 Jun 2021',
    total: 4.99,
  },
  {
    id: 3,
    date: '2 Jun 2021',
    total: 4.99,
  },
]

export const MOCK_LOGIN_HISTORY = [
  {
    id: 1,
    type: 'on 10:40 AM 2021/09/01',
    ip: '95.130.17.84',
    client: 'Chrome, Mac OS 10.15.7',
  },
  {
    id: 2,
    type: 'on 10:40 AM 2021/09/01',
    ip: '95.130.17.84',
    client: 'Chrome, Mac OS 10.15.7',
  },
]

export const MOCK_DATA_CUSTOMERS = [
  {
    name: 'Ekaterina Tankova',
    location: 'Parkersburg, West Virginia, USA',
    orders: 3,
    spends: 300,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    email: 'carson.darrin@devias.io',
  },
  {
    name: 'Cao Yu',
    location: 'Iowa, Bristow, USA',
    orders: 3,
    spends: 300,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    email: 'carson.darrin@devias.io',
  },
  {
    name: 'Alexa Richardson',
    location: 'Atlanta, Georgia, USA',
    orders: 3,
    spends: 300,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    email: 'carson.darrin@devias.io',
  },
  {
    name: 'Anje Keizer',
    location: 'Dover, Ohio, USA',
    orders: 3,
    spends: 300,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    email: 'carson.darrin@devias.io',
  },
  {
    name: 'Clarke Gillebert',
    location: 'Dallas, Texas, USA',
    orders: 3,
    spends: 300,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    email: 'carson.darrin@devias.io',
  },
  {
    name: 'Adam Denisov',
    location: 'Bakerfield, California, USA',
    orders: 3,
    spends: 300,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    email: 'carson.darrin@devias.io',
  },
  {
    name: 'Ava Gregoraci',
    location: 'Redondo Beach, California, USA',
    orders: 3,
    spends: 300,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    email: 'carson.darrin@devias.io',
  },
  {
    name: 'Emilee Simchenko',
    location: 'Las Vegas, Nevada, USA',
    orders: 3,
    spends: 300,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    email: 'carson.darrin@devias.io',
  },
  {
    name: 'Kwak Seong-Min',
    location: 'Detroit, Michigan, USA',
    orders: 3,
    spends: 300,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    email: 'carson.darrin@devias.io',
  },
  {
    name: 'Merrile Burgett',
    location: 'Salt Lake City, Utah, USA',
    orders: 3,
    spends: 300,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    email: 'carson.darrin@devias.io',
  },
]

export const MOCK_DATA_PRODUCTS = [
  {
    name: 'Healthcare Erbology',
    image: product,
    stock: 85,
    price: 23.99,
    sku: '401_1BBXBK',
    status: 'published',
    category: 'healthcare',
    oldPrice: 23.99,
    barcode: '5ece2c077e39da27658aa8a9',
    isActive: false,
  },
  {
    name: 'Healthcare Erbology 1',
    image: product,
    stock: 85,
    price: 23.99,
    sku: '401_1BBXBK',
    status: 'published',
    category: 'healthcare',
    oldPrice: 23.99,
    barcode: '5ece2c077e39da27658aa8a9',
    isActive: false,
  },
  {
    name: 'Healthcare Erbology 2',
    image: product,
    stock: 85,
    price: 23.99,
    sku: '401_1BBXBK',
    status: 'published',
    category: 'healthcare',
    oldPrice: 23.99,
    barcode: '5ece2c077e39da27658aa8a9',
    isActive: false,
  },
  {
    name: 'Healthcare Erbology 3',
    image: product,
    stock: 85,
    price: 23.99,
    sku: '401_1BBXBK',
    status: 'published',
    category: 'healthcare',
    oldPrice: 23.99,
    barcode: '5ece2c077e39da27658aa8a9',
    isActive: false,
  },
  {
    name: 'Healthcare Erbology 4',
    image: product,
    stock: 85,
    price: 23.99,
    sku: '401_1BBXBK',
    status: 'published',
    category: 'healthcare',
    oldPrice: 23.99,
    barcode: '5ece2c077e39da27658aa8a9',
    isActive: false,
  },
  {
    name: 'Healthcare Erbology 5',
    image: product,
    stock: 85,
    price: 23.99,
    sku: '401_1BBXBK',
    status: 'published',
    category: 'healthcare',
    oldPrice: 23.99,
    barcode: '5ece2c077e39da27658aa8a9',
    isActive: false,
  },
  {
    name: 'Healthcare Erbology 6',
    image: product,
    stock: 85,
    price: 23.99,
    sku: '401_1BBXBK',
    status: 'published',
    category: 'healthcare',
    oldPrice: 23.99,
    barcode: '5ece2c077e39da27658aa8a9',
    isActive: false,
  },
  {
    name: 'Healthcare Erbology 7',
    image: product,
    stock: 85,
    price: 23.99,
    sku: '401_1BBXBK',
    status: 'published',
    category: 'healthcare',
    oldPrice: 23.99,
    barcode: '5ece2c077e39da27658aa8a9',
    isActive: false,
  },
  {
    name: 'Healthcare Erbology 8',
    image: product,
    stock: 85,
    price: 23.99,
    sku: '401_1BBXBK',
    status: 'published',
    category: 'healthcare',
    oldPrice: 23.99,
    barcode: '5ece2c077e39da27658aa8a9',
    isActive: false,
  },
  {
    name: 'Healthcare Erbology 9',
    image: product,
    stock: 85,
    price: 23.99,
    sku: '401_1BBXBK',
    status: 'published',
    category: 'healthcare',
    oldPrice: 23.99,
    barcode: '5ece2c077e39da27658aa8a9',
    isActive: false,
  },
]

export const MOCK_LIST_CATEGORY = [
  {
    value: 1,
    title: 'Healthcare',
  },
  {
    value: 2,
    title: 'Makeup',
  },
  {
    value: 3,
    title: 'Dress',
  },
  {
    value: 4,
    title: 'Skincare',
  },
  {
    value: 5,
    title: 'Jewelry',
  },
  {
    value: 6,
    title: 'Blouse',
  },
]

export const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    alt: 'avatar',
    content: 'Jie Yang Song added a new job',
    link: 'Remote React / React Native Developer',
    time: 'Feb 09, 6:52 AM',
  },
  {
    id: 2,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    alt: 'avatar',
    content: 'Jie Yang Song added a new job',
    link: 'Senior Golang Backend Engineer',
    time: 'Feb 09, 6:52 AM',
  },
  {
    id: 3,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    alt: 'avatar',
    content: 'New feature! Logistics management is now available',
    link: '',
    time: 'Feb 09, 6:52 AM',
  },
  {
    id: 4,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    alt: 'avatar',
    content: 'created',
    link: 'Augmastic Inc',
    time: 'Feb 09, 6:52 AM',
  },
]

export const MOCK_CONTACTS = [
  {
    id: 1,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    alt: 'avatar',
    name: 'Alcides Antonio',
    active: '',
    online: true,
  },
  {
    id: 2,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    alt: 'avatar',
    name: 'Marcus Finn',
    active: '3h',
    online: false,
  },
  {
    id: 3,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    alt: 'avatar',
    name: 'Carson Darrin',
    active: '1h',
    online: false,
  },
  {
    id: 4,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    alt: 'avatar',
    name: 'Fran Perez',
    active: '',
    online: true,
  },
  {
    id: 5,
    img: 'https://material-kit-pro-react.devias.io/assets/avatars/avatar-jie-yan-song.png',
    alt: 'avatar',
    name: 'Jie Yan Song',
    active: '',
    online: true,
  },
]
