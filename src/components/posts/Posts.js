import React from "react";
import { css } from "glamor";
import CreatePostFormContainer from "./CreatePostFormContainer";
import LoggedLayout from "../logged/LoggedLayout";
import PostItem from "./postItem/PostItem";

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
              <PostItem
                title={post.title}
                content={post.content}
                author={post.author}
                key={post.id}
              />
            ))}
        </div>
      </div>
    </LoggedLayout>
  );
}
