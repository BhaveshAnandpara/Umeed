import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import '../SelfHelpGroup/SelfHelpGroup.css'
import SelfHelpCard from '../../SelfHelpCard/SelfHelpCard'
export default function SelfHelpGroup() {
  // Arr =["linear-gradient(90deg, #67B8E0 0%, #1B68A8 99.99%, #004E8F 100%)"]
  return (
    <div>
      <SearchBar />
      <div className="SelfHelpContainer" >

             <SelfHelpCard/>
        

      </div>

    </div>
  )
}
