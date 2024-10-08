import { routesPaths } from '@/shared/consts/routesPaths'

const { pathDrikList, pathDrinkCard } = routesPaths

export const navList = [
  {
    navIconName: 'IconBlog',
    navText: 'Заказы',
    navPath: '/',
  },
  {
    navIconName: 'IconBlogPosts',
    navText: 'Напитки',
    navPath: pathDrikList,
  },
  {
    navIconName: 'IconAddPosts',
    navText: 'Карточка напитка',
    navPath: pathDrinkCard,
  },
]
