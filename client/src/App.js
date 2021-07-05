import React, { useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import logo from './images/logo.png';
import { BlogPostForm } from './components/BlogPostForm/BlogPostForm';
import { BlogPostsPage } from './components/BlogPostsPage/BlogPostsPage';
import styles from "./styles";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

export default function App()
{
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getPosts());
  }, [dispatch]);

  return(
  <Container maxwidth="lg">
    <AppBar position="static" color="inherit" style={styles.appBar}>
      <Typography variant="h2" align="center" style={styles.heading}>The Blog App</Typography>
      <div align="center">
        <img src={logo} alt="logo" height="60" width="60" margin="auto" style={styles.image}/>
      </div>
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
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