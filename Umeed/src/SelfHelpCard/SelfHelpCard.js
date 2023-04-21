import React, { useEffect, useState } from 'react'
import '../SelfHelpCard/SelfHelpCard.css'
import Data from './Data.json'
import axios from 'axios'

export default function SelfHelpCard() {
  // console.log(Data)

    const [cards, setCards] = useState([])

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'http://localhost:5000/card/GetCard',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setCards( response.data )
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  const Arr = [
    "linear-gradient(90deg, #67B8E0 0%, #1B68A8 99.99%, #004E8F 100%)",
    "linear-gradient(90deg, #134E5E 0%, #71B280 100%)",
    "linear-gradient(90deg, #928DAB 0%, #1F1C2C 100%)",
    "linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%)"
  ]


  return (
    <div>
      {
        cards.map((post, idx) => {

          return (
            <div className="cards" style={{ background: Arr[idx % Arr.length] }}  >
              <div className="PicNameContainer">
                <div className="pic">

                </div>
                <div className="NameAndType">
                  <div className="Name">
                    {post.grName}
                  </div>
                  <div className="Type">
                    <div className="TypeOne">
                      {post.grPropertiesOne}
                    </div>
                    <div className="TypeOne">
                      {post.grPropertiesTwo}
                    </div>
                  </div>


                </div>

                <div className="JoinGr">
                  <button className='Btn-JoinGr' onClick={ ()=>{
                    window.location.href=post.grLink
                  }}>Join Group</button>
                </div>


              </div>


              <div className="NoParticipants">
                <section className='Participants'>
                  {post.participants} participants
                </section>
              </div>

              <div className="manageBy">
                Managed By {post.ManagedBy}
              </div>
            </div>
          )
        })
      }

    </div>
  )
}
