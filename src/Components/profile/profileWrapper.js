import React from 'react';
import faker from 'faker';

import '../../assets/stylesheets/profile/ProfileWrapper.css';

const ProfileWrapper = () => {
    const userData = {
        name: 'User Name',
        image: faker.image.avatar(),
        userId: 'user_id'
    }

    return (
        <div className="profileWrapper">
            <div class="profileImage">
                <img src={userData.image} alt={userData.name} />
            </div>
            <div class="profileName">
                {userData.name}
            </div>
            <div class="profileId">
                @{userData.userId}
            </div>
        </div>
    )
}

export default ProfileWrapper;