import React, { useState } from "react";
import { css } from "glamor";
import CreatePostFormContainer from "./form/CreatePostFormContainer";
import LoggedLayout from "../logged/LoggedLayout";
import PostItemContainer from "./postItem/PostItemContainer";
import Searchbar from "../Searchbar";
import { handleSearch } from "../../utils/search";

const postClass = css({
  border: "1px solid gray",
  padding: "12px",
  margin: "20px 8px 0 8px",
});

export default function Posts(props) {
  const { posts } = props;
  const [search, setSearch] = useState("");
  return (
    <LoggedLayout>
      <div className="min-h-screen overflow-hidden w-full">
        <div className="mx-32 mb-5">
          <Searchbar
            placeHolder="Buscar"
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div className="h-screen px-32 overflow-scroll scrollbar">
          <CreatePostFormContainer />
          <div>
            {posts?.length > 0 &&
              handleSearch(
                posts,
                ["id", "title", "content", "author.username"],
                search
              ).map((post) => <PostItemContainer post={post} key={post.id} />)}
          </div>
        </div>
      </div>
    </LoggedLayout>
  );
}
