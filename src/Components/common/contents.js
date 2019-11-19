import React, { Fragment } from 'react';
import FeedWrapper from '../feed/FeedWrapper';
import ProfileWrapper from '../profile/profileWrapper';
import WidgetWrapper from '../widget/widgetWrapper';
import SignUpWrapper from '../signup/signupWrapper';

const Contents = () => {
    return (
        <Fragment>
            <div>
                <SignUpWrapper />
            </Fragment>
            <Fragment>
                <FeedWrapper />
                <ProfileWrapper />
                <WidgetWrapper />
            </div>
        </Fragment>
    )
}

export default Contents;