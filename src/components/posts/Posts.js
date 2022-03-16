import React from "react";
import { css } from "glamor";

const postClass = css({
  border: "1px solid gray",
  padding: "12px",
  margin: "0 8px 0 8px",
  "& + &": {
    marginTop: "20px",
  },
});

export default function Posts(props) {
  const { posts } = props;
  return (
    <div>
      {posts?.map((post) => (
        <div className={postClass}>
          <h4>{post?.title}</h4>
          <p>{post?.content}</p>
        </div>
      ))}
    </div>
  );
}
