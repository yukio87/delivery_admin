import { FC } from 'react'

import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'

import { iconStyles } from './consts/iconStyles'
import * as S from './style'
import { OrderRowProps } from './type'

export const OrderRow: FC<OrderRowProps> = ({ order }) => {
  const {
    address,
    cart,
    customer,
    estimatedDelivery,
    numOrder,
    phone,
    priceDelivery,
    priceOrder,
  } = order

  return (
    <S.Container>
      <S.NumOrder>{numOrder}</S.NumOrder>

      <S.Row>
        <span>Контактная информация:</span>
        <S.BlackText>
          {customer} {phone}
        </S.BlackText>
      </S.Row>

      <S.Row>
        <span>Адрес:</span>
        <S.BlackText>{address}</S.BlackText>
      </S.Row>

      <S.Row>
        <span>Корзина:</span>
        <S.Row $withScroll={true}>
          {cart.map(({ name, quantity }) => (
            <S.BlackText key={name}>
              {name} x {quantity}
            </S.BlackText>
          ))}
        </S.Row>
      </S.Row>

      <S.Row>
        <span>
          Сумма: <S.BlackText> {priceOrder - priceDelivery} ₽</S.BlackText>
        </span>
        <span>
          Доставка: <S.BlackText>{priceDelivery} ₽</S.BlackText>
        </span>
        <span>
          Итого: <S.BlackText>{priceOrder} ₽</S.BlackText>
        </span>
      </S.Row>

      <S.Row>
        <span>Доставить до:</span>
        <S.BlackText>{estimatedDelivery}</S.BlackText>
      </S.Row>

      <S.ButtonWrapper>
        <Button $variation="secondary">
          <Icon name="IconBlog" styles={iconStyles} />
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}
