import React from 'react';
import {styles} from './styles';

export function BlogPostForm()
{

  handleSubmit = () => {

  };

  return (
    <Paper>
      <form autoComplete="off" noValidate style={styles.form} onSubmit={handleSubmit}>
        <Typography variant="h6">Napisz swój post</Typography>
        <TextField name="creator" variant="outline" label="Creator" fullWidth value={postData.creator} onChange={}/>
      </form>
    </Paper>
  );
}