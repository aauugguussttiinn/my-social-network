import { getPosts, addPost } from "redux/actions/postActions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PostForm = () => {
  

  const [content, setContent] = useState('');
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    if (content) {
      const data = {
        content,
        author: user[0].pseudo,
        likes: 0,
      };

      await dispatch(addPost(data));
      // the 3 following lines will be executed only after the above dispatch
      // thanks to the await (optional)
      setContent('');
      dispatch(getPosts());
      // we have to dispatch again because the id of the article is set by the db in backend so
      // we have to update the store by getting its value after creation
    }
  }
  
  return (
    <div className="d-flex">
      <div className="col-3"></div>
      <form className="col-6 my-2" onSubmit={ (e) => handleForm(e) }>
        <div className="form-group my-1">
          <label className="my-2 text-primary" htmlFor="newpublication"><b>Votre publication</b></label>
          <textarea className="form-control" placeholder="What's on your mind ?" value={ content } onChange={ (e) => setContent(e.target.value) }></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-2" value="Envoyer" />
      </form>
      <div className="col-3"></div>
    </div>
  );
};

export default PostForm;

