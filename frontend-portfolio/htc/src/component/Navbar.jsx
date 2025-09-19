import React from 'react'
import {navLinks} from "../constants"

const Home = () => {
  return (
<nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          {/* brand image */}
          {/* <img src="" alt="" /> */}
          <p className='text-white font-stretch-50%'>HTC</p>
        </a>
        <ul>
          {[
            navLinks.map((link) => (
              <li key={link.id}>
                <a href={`${link.id}`}>{link.title}</a>
              </li>
            )),
          ]}
        </ul>
      </div>
    </nav>
  )
}

export default Home