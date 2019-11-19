import React from 'react';
import faker from 'faker';

import '../../assets/stylesheets/profile/ProfileWrapper.css';

const ProfileWrapper = () => {
    return (
        <div className="profileWrapper">
            <div class="profileImage">
                <img src={faker.image.avatar()} alt="닉네임" />
            </div>
            <div class="profileName">닉네임</div>
            <div class="profileId">@userId</div>
        </div>
    )
}

export default ProfileWrapper;