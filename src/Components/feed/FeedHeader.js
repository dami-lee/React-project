import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const FeedHeader = ({ loading, feed }) => {
    return (
        <CardHeader
            avatar={
                loading ? (
                    <Skeleton varient="circle" width={40} height={40} />
                ) : (
                    <Avatar
                        alt={feed.name}
                        src={feed.image}
                    />
                )
            }
            action={
                !loading && (
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                )
            }
            title={
                loading ? <Skeleton height={6} width="80%" /> : feed.name
            }
            subheader={
                loading ? <Skeleton height={6} width="40%" /> : feed.time
            }
        />
    )
}

export default FeedHeader;