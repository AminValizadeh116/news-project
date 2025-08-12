import Image from 'next/image'
import React from 'react'
import aa from './../../../public/edited-photo.png'

function Logo() {
  return (
    <div>
      <Image src={aa} alt='logo' className=''/>
    </div>
  )
}

export default Logo
