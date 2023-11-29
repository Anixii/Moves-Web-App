import React from 'react'
import './PageHeader.css'
import bg from '../../assets/img/footer-bg.jpg'
const PageHeader = (props) => { 
  return (
    <div className='page-header' style={{backgroundImage: `url(${bg})`}}>
        <h2 className='page-header_title'>{props.children}</h2>
    </div>
  )
}

export default PageHeader