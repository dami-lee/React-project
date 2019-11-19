import React from 'react';
import '../../assets/stylesheets/feed/FeedProfile.css';

const FeedProfile = props => {
    return (
        <div className="profile">
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

export default FeedProfile;