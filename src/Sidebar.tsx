// import React from 'react'

import { Link } from "react-router-dom"
// import { FaBars} from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { useAuth } from "./store/hook"

const Sidebar = () => {

  const { sideBar, setSidebar} = useAuth()

  const SidebarData = [
    {
      name:"Dashobard",
      to:'/'
    },
    {
      name:"Settings",
      to:'/settings'
    },
    {
      name:"Profile",
      to:'/profile'
    },
    // {
    //   name:"Logout",
    //   to:'/'
    // },
  ]
  return (
    <aside
      
    className={sideBar ? "sidebar-open":"sidebar" }
      // className="sidebar"
      // className="sidebar-open"
    >
        <div className="side-top">
          <h2>Sidebar</h2>
          <button className='nav-btn' onClick={()=>setSidebar(false)}>
                <HiX size={30} color='#fff'/>  
          </button>
        </div>
      <nav>
        <ul className="sidedata">
          {
            SidebarData.map((item, idx)=>{
              return(
                <li key={idx}>
                  <Link to={item.to} onClick={()=>setSidebar(false)}>{item.name}</Link>
                </li>
              )
            })
          }
          {/* <li>Logout</li> */}
        </ul>
      </nav>

      
        <Link to={'/'} onClick={()=>setSidebar(false)}>Logout</Link>
     
    </aside>
  )
}

export default Sidebar