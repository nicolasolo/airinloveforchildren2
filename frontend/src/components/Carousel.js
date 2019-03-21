import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'AIRIN LOVE FOR CHILDREN',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        label2: 'è una libera Associazione non avente fini di lucro e ha allo scopo di sostenere iniziative atte a promuovere lo sviluppo nel Continente Africano\.\
Le iniziative dell’Associazione vengono finanziate attraverso contributi  di privati.',

    },
    {
        label: 'IL CIBO CHE NON C\'È',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        label2: 'Nel mondo c\'\è abbastanza cibo per sfamare tutti: eppure, molte persone ancora soffrono la fame perché non dispongono di generi alimentari in qualità e quantità suficienti a soddisfare i propri bisogni\.Chi subisce le conseguenze peggiori della fame sono i bambini',
    },
    {
        label: 'Adottare a distanza',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
        label2:'Adottare a distanza un bambino, una famiglia o una comunità in Africa significa permettere ai bambini di crescere, avendo accesso alle cure necessarie, e contribuire allo sviluppo di individui che avranno la possibilità di partecipare attivamente nella propria comunità. ' ,
    },
    {
        label: 'I bambini',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
        label2:'I bambini  di cui ci prendiamo cura sono nati nella miseria e nell’abbandono degli slum di Nairobi anche sulla costa in cui gli abitanti sono lasciati completamente a se stessi senza la minima garanzia da parte del Governo delle infrastrutture elettriche e idriche essenziali e nella totale assenza di strutture sanitarie e scolastiche pubbliche.',
    },
    {
        label: 'L\'Africa',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        label2:'L’Africa è da sempre afflitta da innumerevoli problemi: la mancanza di acqua e cibo, la povertà estrema, la carestia che colpisce le popolazioni già indebolite da guerre e conflitti politici, il dilagare del virus HIV/AIDS e di malattie facilmente curabili nel resto del mondo, le condizioni di vita miserabili nelle baraccopoli delle città',
    },
];

const styles = theme => ({
    root: {
        maxWidth: '100%',
        flexGrow: 1,
    },
    header: {
        width:'100%',
        textAlign: 'center',
        paddingTop: 10,
        fontSize: '2rem',
        height: 50,
        backgroundColor: theme.palette.background.default,
    },
    footer: {
        width: '100%',
        display:'flex',
        alignItems: 'center',
        height: 200,
        backgroundColor: theme.palette.background.default,
        paddingLeft: 15,
        paddingRight: 15,
        BorderRadius: '20px',
    },
    img: {
        alignItems: 'center',
        height: 255,
        maxWidth: '700px',
        overflow: 'hidden',
        width: '100%',
    },
});

class SwipeableTextMobileStepper extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = tutorialSteps.length;

        return (
            <div className={classes.root}>
                <Paper square elevation={3} className={classes.header}>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <Paper square elevation={3} className={classes.footer}>
                    <Typography>{tutorialSteps[activeStep].label2}</Typography>
                </Paper>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
            </Button>
                    }
                />
            </div>
        );
    }
}

SwipeableTextMobileStepper.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);