import React, {useState,useEffect} from "react";
import Nav from './nav.js'


const Profile = ({signOut, userSess}) => {
    return(
        <div className="nav">
            <Nav signOut={signOut} user={userSess.loadUserData()} />
        </div>
    )
}

export default Profile;