import React from 'react';
import faker from 'faker';
import FeedBox from './FeedBox';
import FeedProfile from './FeedProfile';

import '../../assets/stylesheets/feed/FeedWrapper.css';

class FeedWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feeds: [
                {
                    id: 0,
                    image: faker.image.avatar(),
                    name: '김영하',
                    time: '2019년 11월 17일',
                    content: '<여행의 이유> 저자입니다.',
                    like: 1,
                    likeDone: true
                },
                {
                    id: 1,
                    image: faker.image.avatar(),
                    name: '최은영',
                    time: '2019년 11월 17일',
                    content: '<백의 그림자> 저자입니다.',
                    like: 0,
                    likeDone: false
                },
                {
                    id: 2,
                    image: faker.image.avatar(),
                    name: '구병모',
                    time: '2019년 11월 17일',
                    content: '<파과> 저자입니다.',
                    like: 0,
                    likeDone: false
                }
            ]
        }
    }

    renderFeedBox = feedObj => {
      return (
        <FeedBox
            key={feedObj.id}
            like={feedObj.like}
            likeDone={feedObj.likeDone}>
            <FeedProfile
            name={feedObj.name}
            image={feedObj.image}
            time={feedObj.time} />
            {feedObj.content}
        </FeedBox>
      )
    }
    
    render() {
        const { feeds } = this.state;

        return (
            <div className="feedWrapper">
                {
                    feeds.map(feedObj => (
                        this.renderFeedBox(feedObj)
                    ))
                }
            </div>
        );
    }
}

export default FeedWrapper;