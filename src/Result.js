import React from 'react'
import './Result.css'
import List from './List'

const Result = () => {
  return (
    <div className="main">
      <div className="top_main_page_header">live result scan </div>

      <div className="sub_heading_here" >Host executive summery </div>

      <div className="name_site">localHost</div>

      <div className="vanrebilities_here">
        <div className="critical box">1</div>
        <div className="high box" >2</div>
        <div className="medium box">6</div>
        <div className="low box">3</div>
        <div className="info box">10</div>
      </div>

      <div className="list_of_vanrebilities">
        <div className="headings">
          <div className="severity">Severty</div>
          <div className="cvss_num">CVSS</div>
          <div className="plugin">Plugin</div>
          <div className="name">Name</div>
        </div>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>


      </div>
    </div>
  )
}

export default Result