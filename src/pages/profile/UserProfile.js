import React, { useEffect, useState } from "react";
import LoggedLayout from "../../components/logged/LoggedLayout";
import PostItemContainer from "../../components/posts/postItem/PostItemContainer";

export default function UserProfile(props) {
  const { currentUser, userPosts } = props;

  return (
    <LoggedLayout>
      <div className="flex flex-row">
        <div className="w-1/3 flex flex-col items-center">
          <img
            className="rounded-full m-5 border shadow-sm"
            width={200}
            height={200}
            src={require("../../assets/user.jpg")}
          />
          <div>
            <UserInfo title={currentUser?.name} label="Nome" />
            <UserInfo title={currentUser?.email} label="E-mail" />
            <UserInfo title={currentUser?.username} label="Nome de Usuário" />
          </div>
        </div>
        <div className="w-2/3 ">
          <div className="m-5">
            <div className="font-bold text-lg ">
              Olá,{" "}
              {currentUser?.name || currentUser?.username || currentUser?.email}
            </div>
            <div>Aqui estão todos os seus posts!</div>
            {userPosts?.length > 0 ? (
              <div>
                No total, você publicou {userPosts?.length} poemas! Continue
                publicando.
              </div>
            ) : (
              <div>Você ainda não publicou nada!</div>
            )}
          </div>
          <div
            className="          h-screen overflow-auto
"
          >
            {userPosts?.length > 0 &&
              userPosts?.map((post) => (
                <PostItemContainer
                  post={post}
                  key={post.id}
                  isOwner={currentUser?.id === post?.author?.id}
                />
              ))}
          </div>
        </div>
      </div>
    </LoggedLayout>
  );
}

const UserInfo = (props) => {
  return (
    <div className="mb-2 flex flex-col pb-3 flex-1 border-b-2 border-myColors-purpleDark">
      <span className="mb-2 font-bold">
        {props?.label} {"  "}
      </span>
      {props?.title
        ? props?.title
        : `Você ainda não informou um ${props?.label.toLowerCase()}`}
    </div>
  );
};
