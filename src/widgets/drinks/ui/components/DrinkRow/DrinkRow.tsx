import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { setPrefilledValues } from '@/pages/create-edit-drink-page'
import { routesPaths } from '@/shared/consts/routesPaths'
import { formatPrice } from '@/shared/lib/format'
import { useAppDispatch } from '@/shared/lib/hooks/hooks'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'

import { iconStyles } from './consts/iconStyles'
import * as S from './style'
import { DrinksProps } from './type'

export const DrinkRow: FC<DrinksProps> = ({ drink }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { pathDrinkCard } = routesPaths
  const { id, imageUrl, ingredients, name, unitPrice } = drink

  const handleClick = () => {
    dispatch(
      setPrefilledValues({
        imageUrl,
        ingredients,
        name,
        unitPrice,
      }),
    )
    navigate(`${pathDrinkCard}/${id}`)
  }
  return (
    <S.Container>
      <S.ImgWrapper>
        <S.Img alt="drink" src={imageUrl} />
      </S.ImgWrapper>

      <S.Name>{name}</S.Name>

      <S.Ingredients>
        <span>Ингредиенты:</span>
        <span>{ingredients}</span>
      </S.Ingredients>

      <S.Price>{formatPrice(unitPrice)} ₽</S.Price>

      <S.ButtonWrapper>
        <Button $variation="secondary" onClick={handleClick}>
          <Icon name="IconBlog" styles={iconStyles} />
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}
