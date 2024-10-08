import { FC } from 'react'
import DropdownB from 'react-bootstrap/Dropdown'

import { useAppDispatch } from '@/shared/lib/hooks/hooks'

import { setSort } from '../../../model/sortSlice/sortSlice'
import { dropdownItemList } from './consts/dropdownItemList'
import * as S from './style'
import { DropdownItem, DropdownProps } from './type'

export const Dropdown: FC<DropdownProps> = ({
  selectedSortedBy,
  setSelectedSortedBy,
}) => {
  const dispatch = useAppDispatch()

  const handleSelect = (eventKey: string) => setSelectedSortedBy(eventKey)

  const handleClick = ({ sortBy, ascending }: DropdownItem) => {
    dispatch(
      setSort({
        sortBy,
        ascending,
      }),
    )
  }

  return (
    <S.StyledDropdownB onSelect={handleSelect}>
      <DropdownB.Toggle id="dropdown-basic">
        {selectedSortedBy || <span>Сортировать</span>}
      </DropdownB.Toggle>

      <DropdownB.Menu>
        {dropdownItemList.map((item) => (
          <DropdownB.Item
            key={item.label}
            eventKey={item.label}
            onClick={() => handleClick(item)}
          >
            {item.label}
          </DropdownB.Item>
        ))}
      </DropdownB.Menu>
    </S.StyledDropdownB>
  )
}
