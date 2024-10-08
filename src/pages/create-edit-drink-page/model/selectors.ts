// import { createSelector } from '@reduxjs/toolkit'

// import { base64ToFile } from '@/shared/lib/convert'
// import { RootState } from '@/types/type'

// export const selectPrefilledValues = createSelector(
//   [(store: RootState) => store.createEditDrink],
//   ({ imageUrl, ingredients, name, unitPrice }) => {
//     const file = base64ToFile(imageUrl, name)

//     const dt = new DataTransfer()
//     dt.items.add(file)
//     const fileList = dt.files

//     return {
//       ingredients,
//       name,
//       unitPrice,
//       file: fileList[0],
//     }
//   },
// )
