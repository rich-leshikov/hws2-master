import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
  _id: number
  name: string
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'anime', priority: 'low'},
  {_id: 3, name: 'games', priority: 'low'},
  {_id: 4, name: 'work', priority: 'high'},
  {_id: 5, name: 'html & css', priority: 'middle'},
  {_id: 6, name: 'анжуманя', priority: 'high'},
  {_id: 7, name: 'прес качат', priority: 'high'},
  {_id: 8, name: 'бегит', priority: 'middle'},
  {_id: 9, name: 'присиданя', priority: 'high'},
  {_id: 10, name: 'потягиваня', priority: 'high'},
  {_id: 11, name: 'бруся делат', priority: 'middle'},
  {_id: 12, name: 'бороца', priority: 'high'},
  {_id: 13, name: 'не здаваца', priority: 'high'},
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
  return filter !== 'all' ? affairs.filter(da => da.priority === filter) : affairs
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
  return affairs.filter(da => da._id !== _id)
}

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => {
    setAffairs(deleteAffair(affairs, _id))
  }

  return (
    <div id={'hw2'}>
      <div className={s2.hwTitle}>Homework #2</div>
      <div className={s2.hw}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
    </div>
  )
}

export default HW2
