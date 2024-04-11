'use client'

import React from 'react'
import CommonTable from '@components/common/CommonTable'
import { IColumn } from '@admin/interfaces/common'
import { EDataTypes } from '@admin/enums/common'

const TableLearning = () => {
  const columns: IColumn[] = [
    {
      key: 'id',
      title: 'No',
      dataType: EDataTypes.Number,
      align: 'center'
    },
    {
      key: 'technique',
      title: 'Technique',
      align: 'end'
    },
    {
      key: 'startDate',
      title: 'Start date',
      dataType: EDataTypes.Date
    },
    {
      key: 'endDate',
      title: 'End date',
      dataType: EDataTypes.Date
    },
    {
      key: 'status',
      title: 'Status',
    },
    {
      key: 'description',
      title: 'Description',
    },
    {
      key: 'action',
      title: '',
    },
  ]

  const DEMO_SRC = [
    {
      id: 1,
      technique: 'NextJs',
      startDate: '2024-03-21',
      endDate: null,
      status: 1,
      description: 'Best for SEO and performance.',
    },
    {
      id: 2,
      technique: 'NodeJs',
      startDate: '2023-10-01',
      endDate: null,
      status: 2,
      description: 'Best performance for realtime event.',
    },
    {
      id: 3,
      technique: 'ReactJs & VueJs',
      startDate: '2021-07-01',
      endDate: '2022-01-01',
      status: 3,
      description: 'Good for seeking jobs',
    },
  ]
  return <CommonTable columns={columns} dataSource={DEMO_SRC} />
}

export default TableLearning
