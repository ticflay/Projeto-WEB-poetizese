import React, { useState } from "react";
import LoggedLayout from "../../components/logged/LoggedLayout";
import PostItemContainer from "../../components/posts/postItem/PostItemContainer";
import Searchbar from "../../components/Searchbar";
import { handleSearch } from "../../utils/search";
export default function HomePage(props) {
  const { userPosts, currentUser } = props;
  const [search, setSearch] = useState("");
  return (
    <LoggedLayout>
      <div className="flex flex-col max-w-full my-5 mx-32 scrollbar">
        <header className=" self-center font-extrabold font-mono text-5xl m-4">
          Seus Poemas
        </header>
        <Searchbar placeHolder="Buscar" search={search} setSearch={setSearch} />

        {userPosts?.length > 0 &&
          handleSearch(userPosts, ["id", "title", "content"], search).map(
            (post) => (
              <PostItemContainer
                post={post}
                key={post?.id}
                isOwner={post?.author?.id === currentUser.id}
              />
            )
          )}
      </div>
    </LoggedLayout>
  );
}
