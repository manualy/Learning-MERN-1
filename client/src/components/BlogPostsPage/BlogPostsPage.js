import React from "react";
import Post from './Post/Post';
import { useSelector } from "react-redux";

import {styles} from './styles';

export const BlogPostsPage = () =>
{
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  
    return (
      <div>
        <h1>Strona z postami blogów</h1>
        <Post />
        <Post />
      </div>
    );
}