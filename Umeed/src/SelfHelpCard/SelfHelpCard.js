import React from 'react'
import '../SelfHelpCard/SelfHelpCard.css'
import Data from './Data.json'

export default function SelfHelpCard() {
    // console.log(Data)
  return (
    <div>
        {
            Data.map(post=>{
                return(
<div className="cards">
<div className="PicNameContainer">
  <div className="pic">

  </div>
  <div className="NameAndType">
    <div className="Name">
      {post.GroupName}
    </div>
    <div className="Type">
      <div className="TypeOne">
        {post.Properties1}
      </div>
      <div className="TypeOne">
     {post.Properties2}
      </div>
    </div>


  </div>

  <div className="JoinGr">
    <button className='Btn-JoinGr'>Join Group</button>
  </div>


</div>


<div className="NoParticipants">
  <section className='Participants'>
{post.Participants}
  </section>
</div>

<div className="manageBy">
{post.ManagedBy}
</div>
</div>
                )
            })
        }
 
    </div>
  )
}
