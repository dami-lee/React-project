import React from 'react';
import faker from 'faker';

import '../../assets/stylesheets/profile/ProfileWrapper.css';

const ProfileWrapper = ({userName}) => {
    const userData = {
        name: 'User Name',
        image: faker.image.avatar(),
        userId: 'user_id'
    }

    return (
        <div className="profileWrapper">
            <div className="profileImage">
                <img src={userData.image} alt={userData.name} />
            </div>
            <div className="profileName">
                {userData.name}
            </div>
            <div className="profileId">
                @{userName}
            </div>
        </div>
    )
}

export default ProfileWrapper;