import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import FeedHeader from './FeedHeader';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: theme.spacing(2)
    },
    media: {
        height: 190
    }
}));

const FeedWrapper = ({ loading = false }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <FeedHeader
                loading={loading}
            />
        </Card>
    );
};

FeedWrapper.propTypes = {
    loading: PropTypes.bool
}

export default FeedWrapper;