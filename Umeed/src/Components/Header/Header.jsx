import React from 'react'
import '../Header/Header.css'
export default function Header() {
    return (
        <div className='HeaderContainer'>
            <div className="Hname">
            <a  className='Hname_Header_anchor' href=''><p className='PHname'>Umeed</p></a>
            </div>
            <div className="HeaderComponents">
                <div className="HeaderHome">
                <a  className='Header_anchor' href=''><p>Home</p></a>
                </div>
                <div className="HeaderConnect">
                <a className='Header_anchor' href=''><p>Connect</p></a>
                </div>
                <div className="HeaderSelfHelp">
                <a className='Header_anchor' href=''><p>Self help groups</p></a>

                </div>
                <div className="HeaderSolution">
                <a className='Header_anchor' href=''><p>Solution</p></a>

                </div>
                <div className="Headerprofilepic">
                    <p>Profile</p>

                </div>
            </div>
        </div>
    )
}
