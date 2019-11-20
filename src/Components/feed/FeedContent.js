import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import CardMedia from '@material-ui/core/CardMedia';

const FeedContent = ({ loading, classes, ...props }) => {
    return (
        <>
        {
            loading ? (
                <Skeleton
                    varient="rect"
                    className={classes.media}
                />
            ) : (
                <CardMedia
                    className={classes.media}
                    image="http://placehold.it/600x400"
                    title="Test Name"
                />
            )
        }
        </>
    )
}

export default FeedContent;