import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}:any) => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout