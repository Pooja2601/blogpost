import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=() => {
  return (
    <div>
    <nav>
    <div className="Container">
        <ul className="right">
           <li><Link to={'/'} className="anchor">PostForm</Link></li> 
           <li><Link to={'/allpost'} className="anchor">AllPost</Link></li> 
           <li><Link to={'/export'} className="anchor">Export</Link></li> 
           <li><Link to={'/book'} className="anchor">Book</Link></li> 
           
        </ul>
    </div>
</nav>
    </div>
  )
}
export default Navbar;