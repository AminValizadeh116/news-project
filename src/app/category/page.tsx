import Category from '@/components/category'
import React, { Suspense } from 'react'

function page() {
  return (
    <Suspense>
      <Category />
    </Suspense>
  )
}

export default page
