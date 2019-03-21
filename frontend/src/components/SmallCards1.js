import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import charity from '../img/icons/charity.svg';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const styles = theme => ({
    card: {
        display: 'inline-flex',
        padding: 10,
        borderRadius: 30,
       
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '0 0 ',
    },

    charity: {
        height: 58,
        width: 58,
    },
});

function SmallCards1(props) {
    const { classes, theme } = props;

    return (
        <div>

        <Card className={classes.card}>

 <IconButton aria-label="Play/pause">
                    <img src={charity} className={classes.charity} alt="charity"/>
                    </IconButton>

            <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h6">
                       ADOTTARE A DISTANZA
          </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        un bambino, una famiglia o una comunità in Africa significa permettere ai bambini di crescere
          </Typography>
                <div className={classes.controls}>    
                </div>
                </CardContent>
            </div>
            </Card>

        </div>
    );
}

SmallCards1.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SmallCards1);