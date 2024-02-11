import React from 'react'


interface NavbarItemsProps {
    label: string
}
const NavItems: React.FC<NavbarItemsProps> = ({
  label
}) => {
  return (
    <div className='text-white cursor-pointer hover:text-grey-300 transition'>
     {label}</div>
  )
}

export default NavItems