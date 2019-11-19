import React, { Fragment } from 'react';
import FeedWrapper from '../feed/FeedWrapper';
import ProfileWrapper from '../profile/profileWrapper';
import WidgetWrapper from '../widget/widgetWrapper';
import SignUpWrapper from '../signup/signupWrapper';

const Contents = () => {
    return (
        <Fragment>
            <Fragment>
                <SignUpWrapper />
            </Fragment>
            <Fragment>
                <FeedWrapper />
                <ProfileWrapper />
                <WidgetWrapper />
            </Fragment>
        </Fragment>
    )
}

export default Contents;