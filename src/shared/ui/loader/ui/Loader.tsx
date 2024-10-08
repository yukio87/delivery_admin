import { CSSProperties, FC } from 'react'
import Spinner from 'react-bootstrap/Spinner'

import { colorGray300 } from '@/shared/consts/colors'

import { LoaderProps } from './type'

export const Loader: FC<LoaderProps> = ({
  size = '45px',
  animation = 'grow',
  position = 'center',
  color = colorGray300,
}) => {
  const containerStyles: CSSProperties = {
    display: 'grid',
    height: '100%',
    width: '100%',
  }

  const spinnerStyles: CSSProperties = {
    width: size,
    height: size,
    placeSelf: position,
    color,
  }

  return (
    <div style={containerStyles}>
      <Spinner style={spinnerStyles} animation={animation} />
    </div>
  )
}
