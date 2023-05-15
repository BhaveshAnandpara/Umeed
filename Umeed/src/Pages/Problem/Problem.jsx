import React from 'react'
import '../Problem/Problem.css'
import SearchBar from '../../Components/SearchBar/SearchBar'

import {Link, useNavigate} from 'react-router-dom'


export default function Problem() {
  const navigates=useNavigate()

  return (
    <div>
      
      <SearchBar/>
      
      {/* <ProblemBar/> */}
     
     <div className="ProblemContainer">
      <div className="DepressionContainer" onClick={ ()=> navigates('/Problem/Depression')}>
     <p className='NameOfPic'>DEPRESSION</p>
      </div>

      <div className="AnxietyContainer"onClick={ ()=> navigates('/Problem/Anxiety')}>
      <p className='NameOfPic'>ANXIETY</p>
      </div>

      <div className="AlcoholContainer" onClick={ ()=> navigates('/Problem/Alcohol')}>
      <p className='NameOfPic'>ALCOHOL ADDICTION</p>
      </div>

      <div className="MentalHealthContainer" onClick={ ()=> navigates('/Problem/MentalHealth')}>
      <p className='NameOfPic'>MENTAL HEALTH </p>
      </div>
     </div>
    </div>
  )
}
