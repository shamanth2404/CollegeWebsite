import React from 'react'
import './name.css'
import {GrContact} from 'react-icons/gr'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiGalleryFill} from 'react-icons/ri'
import {RiComputerLine} from 'react-icons/ri'
import {PiStudentFill} from 'react-icons/pi'

function Name() {
  return (
    <div>
      <div className="container head">      
        <img src={require("./assets/bmsce_name_logo.png")} className='college-name' height={90} width={480} />
        <div className="container head-right">
          <div className="head-right-top">
          <div className="btn btn-outline-danger m-1">Campus Login</div>
          <div className="btn btn-primary m-1">Results</div>
          <img src={require("./assets/swayam.png")} height={55} width={200}/>
          </div>
          <div className="head-right-bottom">
            <div className="item"><PiStudentFill className='icon'/>First year UG</div>
            <div className="item"><RiComputerLine className='icon'/>eResources</div>
            <div className="item"><RiGalleryFill className='icon'/>Gallery</div>
            <div className="item"><BsFillPersonFill className='icon'/>Alumni</div>
            <div className="item"> <GrContact className='icon'/>Contact Us</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Name
