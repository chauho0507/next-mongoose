import React from 'react'

const MainContent = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return <div className={className}>{children}</div>
}

export default MainContent
