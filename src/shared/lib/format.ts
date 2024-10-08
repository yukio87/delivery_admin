export const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const formatText = (text: string) => {
  if (!text.length) return text

  const textLowerCase = text.toLowerCase()
  const firstLetter = textLowerCase[0].toUpperCase()

  return firstLetter + textLowerCase.slice(1)
}
