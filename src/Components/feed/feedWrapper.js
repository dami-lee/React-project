import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import FeedHeader from './FeedHeader';
import FeedContent from './FeedContent';

const feeds = [
    {
        id: 0,
        image: faker.image.avatar(),
        name: "Youngha Kim",
        time: "5 hours ago",
        content: "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.",
        like: 1,
        likeDone: true
    },
    {
        id: 1,
        image: faker.image.avatar(),
        name: "Eunyoung Choi",
        time: "5 hours ago",
        content: "The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.",
        like: 0,
        likeDone: false
    },
    {
        id: 2,
        image: faker.image.avatar(),
        name: "Beyongmo Koo",
        time: "5 hours ago",
        content: "Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs to be filled with real words, with thoughts that count, information that has value.",
        like: 0,
        likeDone: false
    }
];

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: theme.spacing(2)
    }
}));

const FeedWrapper = ({ loading = false }) => {
    const classes = useStyles();

    return (
        <>
        {
            feeds.map(feed => (
                <Card
                    className={classes.card}
                    key={feed.id}>
                    <FeedHeader
                        loading={loading}
                        feed={feed}
                    />
                    <FeedContent
                        loading={loading}
                        classes={classes}
                        content={feed.content}
                    />
                </Card>
            ))
        }
        </>
    );
};

FeedWrapper.propTypes = {
    loading: PropTypes.bool
}

export default FeedWrapper;