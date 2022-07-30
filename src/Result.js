import json from './dependency-check-report.json'
import React from 'react'
import './Result.css'
import List from './List'


const Result = () => {
 
  const data = []
  json.dependencies.forEach((obj)=>{
    if(obj.vulnerabilities !== undefined)
    data.push(...obj.vulnerabilities)
  })
  
  let c1=0;
  let m1=0;
  let h1=0;
  let l1=0;
  let i1=0;

  data.map((obj)=>{

    if(obj.severity==="CRITICAL"){c1=c1+1;}
    else if(obj.severity==="HIGH"){h1=h1+1;}
    else if (obj.severity==="MEDIUM"){m1=m1+1;}
    else if(obj.severity==="LOW"){l1=l1+1;}
    else if (obj.severity==="INFO"){i1=i1+1;}
   
   
  })
  console.log(c1)
  
  return (
    <div className="main">
      <div className="top_main_page_header">live result scan </div>

      <div className="sub_heading_here" >Host executive summery </div>

      <div className="name_site">localHost</div>

      <div className="vanrebilities_here">
        <div className="critical box">{c1}</div>
        <div className="high box" >{h1}</div>
        <div className="medium box">{m1}</div>
        <div className="low box">{l1}</div>
        <div className="info box">{i1}</div>
      </div>

      <div className="list_of_vanrebilities">
        <div className="headings">
          <div className="severity">Severity</div>
          <div className="cvss_num">CVSS</div>
      
          <div className="name">Name </div>
        </div>
        { data.map((obj)=><List severity={obj.severity} name={obj.name} cvss={obj.cvssv2.score} />)}
       


      </div>
    </div>
  )
}

export default Result