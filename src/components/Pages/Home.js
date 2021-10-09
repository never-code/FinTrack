import React, {useRef, useEffect} from 'react';
import { Grid } from '@material-ui/core';
// import Details from './components/Details/Details';
import Details from '../Details/Details';
// import Main from './components/Main/Main';
import Main from '../Main/Main';
import useStyles from './styles';
// import useStyles from '.../styles';
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui';
export const Home = () => {
        const classes = useStyles();
        const { speechState } = useSpeechContext();
        const main = useRef(null);
    
        const executeScroll = () => main.current.scrollIntoView()    
    
        useEffect(() => {
          if (speechState === SpeechState.Recording) {
            executeScroll();
          }
        }, [speechState]);
  return (
    <div>
        <Grid className={classes.grid} container spacing = {0} alignItems = "center" justify="center" style = {{height:'100vh'}}>
            <Grid item xs={12} md={3} className={classes.mobile}>
                <Details title="Income" />
             </Grid>
            <Grid ref={main} item xs={12} md={4} className={classes.main}>
                <Main />
            </Grid>
            <Grid item xs={12} md={3} className={classes.desktop}>
                <Details title="Income" />
            </Grid>
           <Grid item xs={12} md={3} className={classes.last}>
                <Details title="Expense" />
            </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
    </div>
  );
};
