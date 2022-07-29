import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Home.css';
import back from './download.png'

const Home = () => {
    const [text , setText]=useState("");
    const [url , setUrl]= useState("");
    const [checkboxes , setCheckboxes]=useState({
      github:false,
      npm_package:false,
      CLI:false,
      DontKnow:false
    });

    const onChange=(e)=>{
      setText(e.target.value);
    }
     const onSubmit =(e)=>{
     e.preventDefault();
     setUrl(text);
     setText("");
     setCheckboxes({
      github:false,
      npm_package:false,
      CLI:false,
      DontKnow:false

     })
   
    }

  return (
    < >
   
    <div style={{ 
      backgroundImage: `url(${back})` 
    }}
     className="Cicle_style_outside">

    <div className="main_home_page">
        <h1>scan your project</h1>
  
        <form  className="form_here" onSubmit={onSubmit}>
        <div className="checklist_of_types">
     <div className="checklist_list_elements">
       <input type="checkbox" onChange={checkboxes.github?()=>{setCheckboxes({...checkboxes, github:false})}:()=>{setCheckboxes({...checkboxes,github:true})}} checked={checkboxes.github} name="github_repo"/>
        <label htmlFor="github_repo">github repo</label>
     </div>
         
     <div className="checklist_list_elements">
        <input type="checkbox" onChange={checkboxes.npm_package?()=>{setCheckboxes({...checkboxes,npm_package:false})}:()=>{setCheckboxes({...checkboxes,npm_package:true})}} checked={checkboxes.npm_package} name="npm_package"/>
        <label htmlFor="npm_package">npm Package</label>
        </div>
        <div className="checklist_list_elements">
        <input type="checkbox" onChange={checkboxes.CLI?()=>{setCheckboxes({...checkboxes,CLI:false})}:()=>{setCheckboxes({...checkboxes,CLI:true})}} checked={checkboxes.CLI} name="CLI" id="CLI"/>
        <label htmlFor="CLI">CLI</label>
        </div>

        <div className="checklist_list_elements">
        <input type="checkbox" onChange={checkboxes.DontKnow?()=>{setCheckboxes({DontKnow:false})}:()=>{setCheckboxes({DontKnow:true})}} checked={checkboxes.DontKnow} name="don't_know" />
        <label for="don't_know">don't know</label>
       </div>
        </div>

        <div className="input_url_form">
           
            <input  className="input_field" type="url" name="url" placeholder="enter url here" value={text} onChange={onChange}/>
            <Link  class="link_button"to="/results">
              <input className="submit_button" type="submit" value="SCAN"/>
            </Link>
        </div>

        </form>
    </div>
    </div>
    </>
  )
}

export default Home