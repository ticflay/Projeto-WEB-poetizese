import React from "react";
import LoggedLayout from "../../components/logged/LoggedLayout";
import PostItemContainer from "../../components/posts/postItem/PostItemContainer";
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
            <PostItemContainer
              post={post}
              key={post?.id}
              isOwner={post?.author?.id === currentUser?.id}
            />
          ))}
      </div>
    </LoggedLayout>
  );
}
