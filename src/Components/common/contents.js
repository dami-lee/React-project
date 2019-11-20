import React from 'react';
import FeedWrapper from '../feed/FeedWrapper';
import ProfileWrapper from '../profile/ProfileWrapper';
import WidgetWrapper from '../widget/widgetWrapper';
import SignUpWrapper from '../signup/signupWrapper';

import '../../assets/stylesheets/common/contents.css';

const Contents = () => {
    return (
        <div>
            <div>
                <SignUpWrapper />
            </div>
            <div class="feed">
                <ProfileWrapper />
                <FeedWrapper />
                <WidgetWrapper />
            </div>
        </div>
    )
}

export default Contents;