import React from "react";
import LoggedLayout from "../components/logged/LoggedLayout";
import PostItem from "../components/posts/postItem/PostItem";

export default function HomePage(props) {
  const { userPosts, currentUser } = props;
  return (
    <LoggedLayout>
      <div className="flex flex-col">
        <header className=" self-center font-extrabold font-mono text-5xl m-4">
          Seus Poemas
        </header>
        {userPosts?.length > 0 &&
          userPosts.map((post) => (
            <PostItem
              title={post.title}
              content={post.content}
              author={post.author}
              key={post.id}
              id={post.id}
              isOwner={post?.author?.id === currentUser.id}
            />
          ))}
      </div>
    </LoggedLayout>
  );
}
