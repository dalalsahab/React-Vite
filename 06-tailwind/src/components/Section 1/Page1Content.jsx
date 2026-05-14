import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'

const Page1Content = () => {
  return (
    <div className='h-[90vh] px-18 py-10 flex items-center justify-between gap-5'>
      <LeftContent />
      <RightContent />

    </div>
  )
}

export default Page1Content
