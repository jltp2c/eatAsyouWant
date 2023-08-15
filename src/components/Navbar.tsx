import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

export const Navbar = () => {
  return (
    <div className='h-14 border-b-2 border-red-500 flex items-center justify-between px-5'>
      {/* Mobile view */}
      {/* LOGO */}
      <Link className='text-red-500' href="/">EatAsYouWant</Link>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}
