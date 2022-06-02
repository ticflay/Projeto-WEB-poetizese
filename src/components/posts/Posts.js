import React from "react";
import { css } from "glamor";
import CreatePostFormContainer from "./form/CreatePostFormContainer";
import LoggedLayout from "../logged/LoggedLayout";
import PostItemContainer from "./postItem/PostItemContainer";

const postClass = css({
  border: "1px solid gray",
  padding: "12px",
  margin: "20px 8px 0 8px",
});

export default function Posts(props) {
  const { posts } = props;
  return (
    <LoggedLayout>
      <div className="flex flex-col">
        <CreatePostFormContainer />
        <div>
          {posts?.length > 0 &&
            posts.map((post) => (
              <PostItemContainer post={post} key={post.id} />
            ))}
        </div>
      </div>
    </LoggedLayout>
  );
}
