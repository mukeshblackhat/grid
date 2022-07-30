import React from 'react'
import './Result.css'

function List({severity,name,cvss}) {
 
  return (
    <div>
         <div className="headings list_font">
          <div className="severity">{severity}</div>
          <div className="cvss_num">{cvss}</div>
         
          <div className="name"> {name}</div>
        </div>
      </div>
    
  )
}

export default List