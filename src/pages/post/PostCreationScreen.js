import React from "react";
import LoggedLayout from "../../components/logged/LoggedLayout";
import CreatePostFormContainer from "../../components/posts/form/CreatePostFormContainer";

export default function PostCreationScreen(props) {
  return (
    <LoggedLayout>
      <div className=" mx-10 w-full h-screen">
        <div> Aqui você pode publicar os seus poemas!</div>
        <CreatePostFormContainer />
      </div>
    </LoggedLayout>
  );
}
