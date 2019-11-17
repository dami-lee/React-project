import React from 'react';
import './Profile.css';

const Profile = props => {
    return (
        <div class="profile">
            <div className="profileImage">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="profileInfo">
                <div className="profileName">
                    {props.name}
                </div>
                <div className="profileTime">
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Profile;