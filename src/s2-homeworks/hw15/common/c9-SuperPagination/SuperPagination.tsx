import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

type SuperPaginationProps = {
  id?: string
  page: number
  itemsCountForPage: number
  totalCount: number
  onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationProps> = ({
                                                           page,
                                                           itemsCountForPage,
                                                           totalCount,
                                                           onChange,
                                                           id = 'hw15',
                                                         }) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage)

  const onChangeCallback = (event: any, page: number) => {
    onChange(page, event.currentTarget.value)
  }

  const onChangeSelect = (value: number) => {
    onChange(1, value)
  }

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + '-pagination'}
        sx={{}}
        page={page}
        count={lastPage}
        onChange={onChangeCallback}
        hideNextButton
        hidePrevButton
        color="primary"
        shape="rounded"
      />

      <div className={s.select}>
        <span className={s.text1}>Показать</span>
        <SuperSelect
          id={id + '-pagination-select'}
          className={s.superSelect}
          value={itemsCountForPage}
          options={[
            {id: 4, value: 4},
            {id: 7, value: 7},
            {id: 10, value: 10},
          ]}
          onChangeOption={onChangeSelect}
        />
        <span className={s.text2}>строк в таблице</span>
      </div>
    </div>
  )
}

export default SuperPagination
