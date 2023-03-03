import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s2 from '../../s1-main/App.module.css'
import s from './HW7.module.css'

export type OptionType = {
  id: number
  value: string | number
}

const arr: Array<any> = [
  {id: 1, value: 'Pre-junior'},
  {id: 2, value: 'Junior'},
  {id: 3, value: 'Junior+'},
]

const HW7 = () => {
  const [value, onChangeOption] = useState(1) // селект и радио должны работать синхронно

  return (
    <div id={'hw7'}>
      <div className={s2.hwTitle}>Homework #7</div>

      {/*демонстрация возможностей компонент:*/}
      <div className={s2.hw}>
        <div className={s.container}>
          <div>
            <SuperSelect
              id={'hw7-super-select'}
              options={arr}
              value={value}
              onChangeOption={onChangeOption}
            />
          </div>
          <div>
            <SuperRadio
              id={'hw7-super-radio'}
              name={'hw7-radio'}
              options={arr}
              value={value}
              onChangeOption={onChangeOption}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW7
