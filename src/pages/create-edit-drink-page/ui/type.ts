import { Drink } from '@/types/type'

export interface DrinkCardInputs extends Omit<Drink, 'id' | 'imageUrl'> {
  imageUrl: string | FileList
}

export interface Data extends Omit<Drink, 'id' | 'imageUrl'> {
  imageUrl: FileList
}
