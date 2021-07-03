import {postMessage} from '../APImodels/postRequest.js';

export const getPosts = async (request, response) => {
  try {
    const postMessageRequest = await postMessage.find();
    console.log(postMessageRequest);
    response.status(200).json(postMessageRequest);
  }
  catch(error)
  {
    response.status(404).json( { message: error.message });
  }
};

export const createPost = async (request, response) => {
  
  const body = request.body;
  const newPost = new postMessage(post);

  try {
    await newPost.save();
    response.status(201).json(newPost);
  }
  catch(error)
  {
    response.status(409).json( { message: error.message });
  }
};