import React from 'react'
import { Typing } from 'react-typing'
import nanoid from 'nanoid'

import 'styles/Header/header.scss'

const Header = () => (
  <div className="header-wrapper">
    {/* Should not be displayed on mobile*/}
    <img className="me" src={`https://robohash.org/clement-martin${nanoid()}`} />
    <div className="header-title">
      <Typing delay={1000} keyDelay={50} className="header-typing">
        <span className="green">{`ClémentMartin`}</span>
        <span className="blue">{`: `}</span>
        <br className="mobile-br" />
        <span className="blue">{`'`}</span>
        <span className="white">{`Fullstack web developer`}</span>
        <span className="blue">{`'`}</span>
      </Typing>
    </div>
  </div>
)

export default Header
