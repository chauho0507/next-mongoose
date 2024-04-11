import { has } from 'lodash'
import { v4 as uuidV4 } from 'uuid'

export const generateListUniqueKey = (originalArr: any[], key = 'key'): any[] =>
  originalArr.map(item => {
    if (has(item, key)) {
      return item
    }
    return {
      ...item,
      [key]: uuidV4(),
    }
  })

export const getCellType = (columns: any[], columnKey: number | string) =>
  columns.find(column => column.key === columnKey)?.dataType ?? columnKey
