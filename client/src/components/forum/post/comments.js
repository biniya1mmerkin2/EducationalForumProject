import React from "react";
import EachComment from "./eachcomment";

const CommentPost = ({ comments, id }) => {
  return (
    <>
      {comments.map((item) => (
        <EachComment
          comment={item.comment}
          likes={item.likes}
          userid={item.userid}
          id={id}
          commentid={item._id}
          key={item._id}
        />
      ))}
    </>
  );
};

export default CommentPost;
