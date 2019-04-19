import React from 'react'
import Skills from 'components/Skills'
import History from 'components/History'
import Contact from 'components/Contact'

import 'styles/Content/content.scss'

const Content = () => (
  <div className="content-wrapper">
    <Skills />
    <div className="content-body">
      <Contact />
      <History />
    </div>
  </div>
)

export default Content
