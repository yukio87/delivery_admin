import { FC } from 'react'

import IconAddPosts from '../assets/icons/add-new-post.svg'
import IconBell from '../assets/icons/bell.svg'
import IconBlog from '../assets/icons/blog.svg'
import IconBlogPosts from '../assets/icons/blog-posts.svg'
import IconDropdown from '../assets/icons/dropdown.svg'
import IconDropdown1 from '../assets/icons/dropdown-1.svg'
import IconEye from '../assets/icons/eye.svg'
import IconEyeSlash from '../assets/icons/eye-slash.svg'
import IconLogo from '../assets/icons/ninja.svg'
import IconSearch from '../assets/icons/search.svg'
import { IconProps, Icons } from './type'

export const Icon: FC<IconProps> = ({ name, styles }) => {
  const icons: Icons = {
    IconLogo: <IconLogo {...styles} />,
    IconBlog: <IconBlog {...styles} />,
    IconBlogPosts: <IconBlogPosts {...styles} />,
    IconAddPosts: <IconAddPosts {...styles} />,
    IconSearch: <IconSearch {...styles} />,
    IconBell: <IconBell {...styles} />,
    IconDropdown: <IconDropdown {...styles} />,
    IconDropdown1: <IconDropdown1 {...styles} />,
    IconEye: <IconEye {...styles} />,
    IconEyeSlash: <IconEyeSlash {...styles} />,
  }

  return icons[name]
}
