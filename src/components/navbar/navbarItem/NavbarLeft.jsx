import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLeft = () => {
  return (
    <Link to={"/"} className='sm:text-6xl text-3xl font-semibold'>
        ShopMe
    </Link>
  )
}

export default NavbarLeft