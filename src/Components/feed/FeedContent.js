import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const FeedContent = ({ loading, content }) => {
    return (
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
                            content
                        }
                    </Typography>
                )
            }
        </CardContent>
    )
}

export default FeedContent;