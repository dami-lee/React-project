import React from 'react';
import { TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';

import './FeedBox.css';

const FeedBox = props => {
    return (
        <div className="feedBox">
            {props.children}

            <div className={props.likeDone ? `like is-active` : `like`}>
                <div className="likeIcon">
                    {
                        props.likeDone ?
                        <TiHeartFullOutline/> :
                        <TiHeartOutline/>
                    }
                </div>
                {props.like}
            </div>
        </div>
    )
}

export default FeedBox;