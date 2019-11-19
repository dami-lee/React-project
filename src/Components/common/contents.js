import React, { Fragment } from 'react';
import feedWrapper from '../feed/feedWrapper';
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
                <feedWrapper />
                <ProfileWrapper />
                <WidgetWrapper />
            </Fragment>
        </Fragment>
    )
}

export default Contents;