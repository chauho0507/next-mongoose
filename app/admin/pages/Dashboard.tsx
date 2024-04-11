'use client'

import { Tabs, Tab, Card, CardBody } from '@nextui-org/react'
import { PROJECTS } from '@admin/constants/common'
import TableLearning from '@admin/components/TableLearning'
import TableWedding from '@admin/components/TableWedding'
import TableNails from '@admin/components/TableNails'
import { ETabs } from '@admin/enums/common'
import { ITab } from '@admin/interfaces/common'

const mappingComponents = {
  [ETabs.Learning]: <TableLearning />,
  [ETabs.Wedding]: <TableWedding />,
  [ETabs.Nails]: <TableNails />,
}

const DashboardPage = () => {
  const renderProjects = () => (
    <Tabs aria-label="Options" color="secondary" items={PROJECTS}>
      {/* {PROJECTS.map(project => (
        <Tab key={project.key} title={project.title}>
          {mappingComponents[project.key]}
        </Tab>
      ))} */}
      {(project: ITab) => (
        <Tab key={project.key} title={project.title}>
          {mappingComponents[project.key]}
        </Tab>
      )}
    </Tabs>
  )

  return <section className="flex w-full flex-col">{renderProjects()}</section>
}
export default DashboardPage
