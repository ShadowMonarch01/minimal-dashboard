// import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useAuth } from './store/hook'

const Header = () => {

  const { setSidebar} = useAuth()

  return (
    <header className="header">

      <button className='nav-btn' onClick={()=>setSidebar(true)}>
        <FaBars size={30} color='#fff'/>
      </button>

      <div>
        <h1>Header</h1>
      </div>

    </header>
  )
}

export default Header