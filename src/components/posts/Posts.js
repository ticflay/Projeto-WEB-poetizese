import React from "react";
import { css } from "glamor";
import CreatePostFormContainer from "./CreatePostFormContainer";

const postClass = css({
  border: "1px solid gray",
  padding: "12px",
  margin: "20px 8px 0 8px",
});

export default function Posts(props) {
  const { posts } = props;
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <button type="submit">SAIR</button>
      </form>
      <CreatePostFormContainer />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => (
            <div className={postClass}>
              <h4>{post?.title}</h4>
              <p>{post?.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
