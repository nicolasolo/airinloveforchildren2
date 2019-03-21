import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import world from '../img/icons/world.svg';

const styles = theme => ({
    card: {
        display: 'inline-flex',
        padding: 10,
        borderRadius: 30 ,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '0 0 ',
    },

    world: {
        height: 58,
        width: 58,
    },
});

function SmallCards2(props) {
    const { classes, theme } = props;

    return (
        <div>
            
        <Card className={classes.card}>

 <IconButton aria-label="Play/pause">
                    <img src={world} className={classes.world} alt="world"/>
                    </IconButton>

            <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h6">
                       VOLONTARIO IN KENYA
          </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
   I nostri progetti di volontariato si svolgono nelle città di Nairobi, Mombasa e Malindi.
                    </Typography>
                <div className={classes.controls}>    
                </div>
                </CardContent>
            </div>
            </Card>

        </div>
    );
}

SmallCards2.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SmallCards2);