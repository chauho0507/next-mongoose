import MainLayout from '@components/MainLayout'
import Header from '@components/Header'
import MainContent from '@components/MainContent'
import React from 'react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout className="w-full min-h-screen">
      <Header />
      <MainContent className="p-8">{children}</MainContent>
    </MainLayout>
  )
}

export default AdminLayout