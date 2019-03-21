import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import volunteer from '../img/icons/volunteer.svg';

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

    volunteer: {
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
                    <img src={volunteer} className={classes.volunteer} alt="volunteer"/>
                    </IconButton>

            <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h6">
                       I BAMBINI 
          
          </Typography>
                       
                    <Typography variant="subtitle2" color="textSecondary">
I bambini di cui ci prendiamo cura sono nati nella miseria e nell’abbandono degli slum di Nairobi                    </Typography>
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