import Country from '@/components/country'
import React, { Suspense } from 'react'

function page() {
  return (
    <Suspense>
      <Country />
    </Suspense>
  )
}

export default page
