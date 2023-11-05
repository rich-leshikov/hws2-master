import React from 'react'
import up from './../../icons/UP.png'
import down from './../../icons/down.png'
import upDown from './../../icons/up-down.webp'

const downIcon = down
const upIcon = up
const noneIcon = upDown

type SuperSortProps = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  return sort === down ? up : sort === up ? '' : down
}

const SuperSort: React.FC<SuperSortProps> = ({sort, value, onChange, id = 'hw15'}) => {
  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down
    ? downIcon
    : sort === up
      ? upIcon
      : noneIcon

  return (
    <span
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
    >
      <img
        id={id + '-icon-' + sort}
        src={icon}
        width={'10px'}
        height={'10px'}
      />
    </span>
  )
}

export default SuperSort
