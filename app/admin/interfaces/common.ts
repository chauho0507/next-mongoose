import { ETabs } from '@admin/enums/common'
import {
  TableColumnProps,
  TableHeaderProps,
  TableBodyProps,
  TableProps,
} from '@nextui-org/react'
import React from 'react'

export interface ITab {
  id: number
  key: ETabs
  title: string
}

export interface IColumn extends Omit<TableColumnProps<any>, 'children'> {
  dataType?: string
}

export interface ICommonTable extends TableProps {
  columns: IColumn[]
  dataSource: any[]
}
