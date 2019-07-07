import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=() => {
  return (
    <div>
    <nav>
    <div className="Container">
        <ul className="right">
           <li><Link to={'/post'} className="anchor">PostForm</Link></li> 
           {/* <li><Link to={'/login'} className="anchor">Login</Link></li>  */}
           <li><Link to={'/allpost'} className="anchor">Blog</Link></li> 
           {/* <li><Link to={'/export'} className="anchor">Export</Link></li> 
           <li><Link to={'/book'} className="anchor">Book</Link></li> 
           <li><Link to={'/exportform'} className="anchor">ExportForm</Link></li>
           <li><Link to={'/exportfrm'} className="anchor">ExportForm1</Link></li> */}
        </ul>
    </div>
</nav>
    </div>
  )
}
export default Navbar;