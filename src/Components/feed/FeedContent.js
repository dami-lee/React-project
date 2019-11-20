import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

        <CardContent>
            {
                loading ? (
                    <>
                        <Skeleton height={6} />
                        <Skeleton height={6} width="80%" />
                    </>
                ) : (
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {
                            "My First Minister of"
                        }
                    </Typography>
                )
            }
        </CardContent>
        </>
    )
}

export default FeedContent;