import React, { useEffect, useState } from "react";
import LoggedLayout from "../../components/logged/LoggedLayout";
import PostItemContainer from "../../components/posts/postItem/PostItemContainer";

export default function UserProfile(props) {
  const { user, posts, isCurrent } = props;
  const called = user?.name || user?.username || user?.email;

  return (
    <LoggedLayout>
      <div className="flex flex-row w-full max-h-screen overflow-auto scrollbar">
        <div className="w-1/3 flex flex-col items-center">
          <img
            className="rounded-full m-5 border shadow-sm"
            width={200}
            height={200}
            src={require("../../assets/user.jpg")}
          />
          <div>
            <UserInfo title={user?.name} label="Nome" />
            <UserInfo title={user?.email} label="E-mail" />
            <UserInfo title={user?.username} label="Nome de Usuário" />
          </div>
        </div>
        <div className="w-2/3 ">
          <div className="m-5">
            <div className="font-bold text-lg ">
              Olá, {user?.name || user?.username || user?.email}
            </div>
            <div>
              {isCurrent
                ? "Aqui estão todos os seus posts!"
                : "Aqui estão todos os posts de " + called}
            </div>
            {posts?.length > 0 ? (
              <div>
                {`No total, ${isCurrent ? "você" : called} publicou ${
                  posts?.length
                } poema(s)! ${isCurrent ? "Continue publicando." : ""}`}
              </div>
            ) : (
              <div>
                {isCurrent
                  ? "Você ainda não publicou nada!"
                  : "O usuário ainda não tem publicações"}
              </div>
            )}
          </div>
          <div className=" scrollbar h-screen overflow-auto">
            {posts?.length > 0 &&
              posts?.map((post) => (
                <PostItemContainer
                  post={post}
                  key={post.id}
                  isOwner={user?.id === post?.author?.id}
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
