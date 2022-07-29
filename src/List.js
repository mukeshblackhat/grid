import React from 'react'
import './Result.css'

function List() {
  return (
    <div>
         <div className="headings list_font">
          <div className="severity">Critical</div>
          <div className="cvss_num">10.0</div>
          <div className="plugin">56584</div>
          <div className="name"><span>[offline]</span> mozilla foundation unsupported application detection</div>
        </div>
      </div>
    
  )
}

export default List