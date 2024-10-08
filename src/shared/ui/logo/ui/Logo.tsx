import { FC } from 'react'

import { colorStone700 } from '@/shared/consts/colors'
import { Icon } from '@/shared/ui/icon'
import { Row } from '@/shared/ui/row'

import * as S from './style'
import { LogoProps } from './type'

export const Logo: FC<LogoProps> = ({
  isResponsive = false,
  sizeSvg = '44.5px',
}) => {
  const iconStyles = {
    width: sizeSvg,
    height: sizeSvg,
    color: colorStone700,
  }

  return (
    <S.Container $isResponsive={isResponsive}>
      <Icon name="IconLogo" styles={iconStyles} />
      <Row>
        <S.TextFirst $isResponsive={isResponsive}>Ninja bar</S.TextFirst>
        <S.TextLast $isResponsive={isResponsive}>Delivery</S.TextLast>
      </Row>
    </S.Container>
  )
}
