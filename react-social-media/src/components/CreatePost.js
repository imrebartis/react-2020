import React, { useState, useRef } from 'react';

function CreatePost({ user, setPosts, posts }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const post = {
      content,
      image,
      user,
    };
    const newPosts = [post, ...posts];
    setPosts(newPosts);
    setContent('');
    imageInputRef.current.value = '';
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setContent(event.target.value)}
          placeholder="Add post content"
          value={content}
        />
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
