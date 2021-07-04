import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import logo from './images/logo.png';
import { BlogPostForm } from './components/BlogPostForm/BlogPostForm';
import { BlogPostsPage } from './components/BlogPostsPage/BlogPostsPage';
import styles from "./styles";

const classes = styles;

class App extends React.Component
{
  render()
  {
    return(
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h1" align="center">The Blog App</Typography>
        <div align="center">
          <img src={logo} alt="logo" height="60" width="60" margin="auto" className={classes.img}/>
        </div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing="3">
            <Grid item xs={12} sm={7}>
              <BlogPostsPage />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BlogPostForm />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    );
  }
}
export default (withStyles(styles)(App));