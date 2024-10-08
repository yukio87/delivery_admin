import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

import {
  useCreateDrinkMutation,
  useDeleteDrinkMutation,
  useEditDrinkMutation,
  useGetDrinkQuery,
} from '@/shared/api/services/DrinkService/DrinkService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { useAppSelector } from '@/shared/lib/hooks/hooks'
import { ErrorResponse } from '@/shared/ui/error-response'
import { Heading } from '@/shared/ui/heading'
import { Loader } from '@/shared/ui/loader'

import { defaultValues } from '../consts/defaultValues'
import { getPrefilledValues } from '../model/slice'
import { ButtonGroup, ImageSelect, Ingredients, InputGroup } from './components'
import * as S from './style'
import { Data, DrinkCardInputs } from './type'

export const CreateEditDrinkPage = () => {
  const { drinkId } = useParams()
  const navigate = useNavigate()
  const prefilledValues = useAppSelector(getPrefilledValues)

  const isEditSession = Boolean(drinkId)

  const {
    data: drink,
    isFetching: isFetchingDrink,
    refetch: refetchDrink,
    error: errorDrink,
  } = useGetDrinkQuery(Number(drinkId), { skip: !isEditSession })

  const [createDrink, { isLoading: isCreating }] = useCreateDrinkMutation()
  const [deleteDrink, { isLoading: isDeleting }] = useDeleteDrinkMutation()
  const [editDrink, { isLoading: isEditing }] = useEditDrinkMutation()

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<DrinkCardInputs>({
    mode: 'onSubmit',
    defaultValues: isEditSession ? prefilledValues : {},
  })

  const isWorking = isCreating || isDeleting || isEditing || isFetchingDrink

  const onSubmit: SubmitHandler<DrinkCardInputs> = async (data) => {
    if (isEditSession) await handleEditDrink(data)
    else
      await handleCreateDrink({
        ...data,
        imageUrl: data.imageUrl as FileList,
      })
  }

  const handleCreateDrink = async (data: Data) => {
    const result = await createDrink({
      ...data,
      imageUrl: data.imageUrl[0],
    })
    if (!result.error) {
      navigate(routesPaths.pathDrikList)
      toast.success('Успех! Напиток создан')
    } else {
      reset(defaultValues)
      toast.error('Ошибка при создании напитка')
    }
  }

  const handleEditDrink = async (data: DrinkCardInputs) => {
    const result = await editDrink({
      id: Number(drinkId),
      body: {
        ...data,
        imageUrl: data.imageUrl,
      },
    })
    if (!result.error) toast.success('Успех! Напиток отредактирован')
    else toast.error('Ошибка при редактировании напитка')
  }

  const handleDeleteDrink = async () => {
    const result = await deleteDrink(Number(drinkId))
    if (!result.error) {
      navigate(routesPaths.pathDrikList)
      toast.success('Успех! Напиток удален')
    } else toast.error('Ошибка при удалении напитка')
  }

  const handleReset = () => reset(defaultValues)

  if (errorDrink)
    return (
      <ErrorResponse
        error={errorDrink}
        refetch={refetchDrink}
        isFetching={isFetchingDrink}
      />
    )
  if (isWorking) return <Loader />

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.H1Wrapper>
        <Heading as="h1">Карточка напитка</Heading>
      </S.H1Wrapper>

      <S.PictureBox>
        <ImageSelect
          drink={drink}
          errors={errors}
          isEditSession={isEditSession}
          register={register}
        />
        <Ingredients errors={errors} register={register} />
      </S.PictureBox>

      <S.Box>
        <S.H3Wrapper>
          <Heading as="h3">Основные настройки</Heading>
        </S.H3Wrapper>
        <InputGroup errors={errors} register={register} />
        <ButtonGroup
          handleDeleteDrink={handleDeleteDrink}
          handleReset={handleReset}
          isEditSession={isEditSession}
        />
      </S.Box>
    </S.Form>
  )
}
