import { FC, useState } from 'react'

import { FileInput } from '@/shared/ui/file-input'
import { Heading } from '@/shared/ui/heading'

import * as S from './style'
import { ImageSelectProps } from './type'

export const ImageSelect: FC<ImageSelectProps> = ({
  isEditSession,
  register,
  errors,
  drink,
}) => {
  const [label, setLabel] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLabel(e.target.files[0]?.name)

  return (
    <S.Container>
      {isEditSession ? (
        <>
          <S.Img src={drink.imageUrl} alt="drink" />
          <S.DrinkName>{drink.name}</S.DrinkName>
        </>
      ) : (
        <Heading as="h4">Изображение</Heading>
      )}
      <S.FileInputWrapper>
        <FileInput
          {...register('imageUrl', {
            onChange: handleChange,
            validate: (v) => v.length > 0 || 'Выберите файл',
          })}
          label={label}
          isError={!!errors.imageUrl}
          accept="image/jpeg, image/png, image/gif, image/bmp"
        />
      </S.FileInputWrapper>
    </S.Container>
  )
}
