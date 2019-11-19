import React from 'react';
import FeedWrapper from '../feed/FeedWrapper';
import ProfileWrapper from '../profile/ProfileWrapper';
import WidgetWrapper from '../widget/widgetWrapper';
import SignUpWrapper from '../signup/signupWrapper';

const Contents = () => {
    return (
        <div>
            <div>
                <SignUpWrapper />
            </div>
            <div>
                <FeedWrapper />
                <ProfileWrapper />
                <WidgetWrapper />
            </div>
        </div>
    )
}

export default Contents;