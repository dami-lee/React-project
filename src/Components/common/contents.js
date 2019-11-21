import React, { Fragment, useState } from 'react';
import FeedWrapper from '../feed/FeedWrapper';
import ProfileWrapper from '../profile/ProfileWrapper';
import WidgetWrapper from '../widget/widgetWrapper';

import '../../assets/stylesheets/common/contents.css';

const Contents = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [signUpFirstName, setSignUpFirstName] = useState("");
    const [isSuccess, setResult] = useState(false);

    const updateEmail = (event) => {
        setEmail(event.target.value);
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }

    const updateSignUpEmail = (event) => {
        setSignUpEmail(event.target.value);
    }

    const updateSignUpPassword = (event) => {
        setSignUpPassword(event.target.value);
    }

    const updateSignUpFirstName = (event) => {
        setSignUpFirstName(event.target.value);
    }

    const signInSubmit = () => {
        const jsonPayload = {
            email: email,
            password: password
        }
        const url = 'http://stagings.ringleplus.com/api/v3/common/authenticate/simple_signin';
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonPayload)
        }

        fetch(url, options).then(res => res.json())
            .then((result) => {
                console.log("result", result);
                result.success ? setResult(true) : setResult(false);
                alert(result.success ? '로그인 성공' : `${result.message}`);
            }, (error) => {
                console.log('error', error);
            });
    }

    const signUpSubmit = () => {
        const jsonPayload = {
            email: signUpEmail,
            password: signUpPassword,
            first_name: signUpFirstName
        };

        const url = 'http://stagings.ringleplus.com/api/v3/common/authenticate/simple_signup';

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonPayload)
        }

        fetch(url, options).then(res => res.json())
            .then((result) => {
                console.log("result", result);
                alert(result.success ? '가입 성공' : `${result.message}`);
            }, (error) => {
                console.log("error", error)
            });
    }

    return (
        <Fragment>
            <div className="header">
                <h1 className="title">FAKEBOOK</h1>
                {
                    isSuccess
                        ?
                        <div className="logInWrapper">
                            <p><b>{email}</b> Logged In</p>
                        </div>
                        :
                        <div className="logInInputWrapper">
                            <div className="inputTagWrapper">
                                <label>Email</label>
                                <input
                                    value={email}
                                    onChange={updateEmail}
                                />
                            </div>
                            <div className="inputTagWrapper">
                                <label>Password</label>
                                <input
                                    value={password}
                                    onChange={updatePassword}
                                    type="password"
                                />
                            </div>
                            <button
                                onClick={signInSubmit}
                            >Sing In</button>
                        </div>
                }
            </div>
            <div>
                {
                    isSuccess
                        ?
                        <div className="feed">
                            <ProfileWrapper
                                userName={email ? email : ''}
                            />
                            <FeedWrapper />
                            <WidgetWrapper />
                        </div>
                        :
                        <div className="signUpWrapper">
                            <div className="imageWrapper">
                                <img src="/logo512.png" alt="react" />
                            </div>
                            <div className="signUp">
                                <div className="signUpInput">
                                    <label>Email</label>
                                    <input
                                        value={signUpEmail}
                                        onChange={updateSignUpEmail}
                                    />
                                </div>
                                <div className="signUpInput">
                                    <label>Password</label>
                                    <input
                                        value={signUpPassword}
                                        onChange={updateSignUpPassword}
                                        type="password"
                                    />
                                </div>
                                <div className="signUpInput">
                                    <label>Firstname</label>
                                    <input
                                        value={signUpFirstName}
                                        onChange={updateSignUpFirstName}
                                    />
                                </div>
                                <button
                                    onClick={signUpSubmit}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                }
            </div>
        </Fragment>
    )
}

export default Contents;