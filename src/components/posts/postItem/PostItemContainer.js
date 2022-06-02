import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { deletePost } from "../../../processes/postProcesses";
import PostItem from "./PostItem";

const PostItemContainer = (props) => {
  const { post, dispatch } = props;
  const deleteHandler = useCallback(() => {
    deletePost(dispatch, post.id);
  }, [post]);

  const [isUpdateVisible, setIsUpdateVisible] = useState(false);

  const toogleUpdate = useCallback(() => {
    setIsUpdateVisible(!isUpdateVisible);
  }, [isUpdateVisible]);

  const openUpdate = useCallback(() => {
    setIsUpdateVisible(true);
    console.log("ta clicando");
  }, [isUpdateVisible]);

  useEffect(() => {
    console.log(isUpdateVisible);
  }, [isUpdateVisible]);
  return (
    <PostItem
      isUpdateVisible={isUpdateVisible}
      toogleUpdate={toogleUpdate}
      deleteHandler={deleteHandler}
      openUpdate={openUpdate}
      {...props}
    />
  );
};

export default connect()(PostItemContainer);
