import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import '../SelfHelpGroup/SelfHelpGroup.css'
export default function SelfHelpGroup() {
  return (
    <div>
      <SearchBar />
      <div className="SelfHelpContainer" >


        <div className="cards">

         
          <div className="PicNameContainer">
            <div className="pic">
            </div>
            <div className="NameAndType">
              <div className="Name">
                No More Depression !!
              </div>
              <div className="Type">
                <div className="TypeOne">
                  Depression
                </div>
                <div className="TypeOne">
                  Anxiety
                </div>
              </div>


            </div>

          </div>

          <div className="JoinGr">
            <button className='Btn-JoinGr'>Join Group</button>
          </div>
         

        </div>

      </div>

    </div>
  )
}
