'use client'

import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Chip,
} from '@nextui-org/react'
import { ICommonTable } from '@admin/interfaces/common'
import { generateListUniqueKey, getCellType } from '@(learning)/utils/helper'
import dayjs from 'dayjs'
import { EDataTypes, EStatuses } from '@admin/enums/common'

const CommonTable: React.FC<ICommonTable> = ({
  columns,
  dataSource,
  color,
  ...rest
}) => {
  const renderCell = React.useCallback(
    (item: any, columnKey: number | string) => {
      const cellType = getCellType(columns, columnKey)
      const cellValue = item[columnKey]

      switch (cellType) {
        case EDataTypes.Date: {
          const cellItem = dayjs(item[columnKey]).isValid()
            ? dayjs(item[columnKey]).format('DD/MM/YYYY')
            : '-'
          return <>{cellItem}</>
        }
        case 'actions':
          return <></>
        case 'status':
          return renderCellStatus(cellValue)
        default:
          return getKeyValue(item, columnKey)
      }
    },
    []
  )

  const renderCellStatus = React.useCallback((status: EStatuses) => {
    switch (status) {
      case EStatuses.NotStart:
        return (
          <Chip color="default" size="sm">
            <span className="text-sm italic">Not start yet</span>
          </Chip>
        )
      case EStatuses.Progressing:
        return (
          <Chip color="success" variant="bordered" size="sm">
            <span className="text-sm italic">In progress</span>
          </Chip>
        )
      case EStatuses.Pending:
        return (
          <Chip color="warning" size="sm">
            <span className="text-sm italic">Pending</span>
          </Chip>
        )
      case EStatuses.Done:
        return <Chip size="sm">Done</Chip>
      case EStatuses.Cancelled:
        return <Chip size="sm">Cancelled</Chip>
      default:
        return <Chip size="sm">Not start</Chip>
    }
  }, [])

  return (
    <Table
      aria-label="Example table with dynamic content"
      color={color}
      defaultSelectedKeys={['2']}
    >
      <TableHeader columns={columns}>
        {column => (
          <TableColumn key={column.key} className="bg-purple-100">
            {column.title}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        emptyContent={'Not found'}
        items={generateListUniqueKey(dataSource)}
      >
        {item => (
          <TableRow key={item.key}>
            {columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default CommonTable
