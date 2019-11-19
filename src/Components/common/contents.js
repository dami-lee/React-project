import React, { Fragment } from 'react';
import feedWrapper from '../feed/feedWrapper';
import ProfileWrapper from '../profile/profileWrapper';
import WidgetWrapper from '../widget/widgetWrapper';
import SignUpWrapper from '../signup/signupWrapper';

const Contents = () => {
    return (
        <Fragment>
            <div>
                <SignUpWrapper />
            </div>
            <div>
                <feedWrapper />
                <ProfileWrapper />
                <WidgetWrapper />
            </div>
        </Fragment>
    )
}

export default Contents;