import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import UpdatePostFormContainer from "../form/UpdatePostFormContainer";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const categoryWrapper = {
  marginTop: 20,
};

export default function PostItem(props) {
  console.log("postitem:", props);
  const { deleteHandler, post, isUpdatedVisible } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const toogleConfig = () => {
    setIsOpen((prev) => !prev);
  };

  const cancelEdit = () => {
    setIsEdit(false);
  };

  const data = [
    props?.isOwner ? { text: "Deletar", id: 0, onClick: deleteHandler } : null,
    props?.isOwner
      ? {
          text: "Editar",
          id: 1,
          onClick: () => setIsEdit(true),
        }
      : null,
  ];
  return isEdit ? (
    <UpdatePostFormContainer
      cancelEdit={cancelEdit}
      form={`updatePost${post.id}`}
      post={post}
    />
  ) : (
    <div
      id="testando"
      className=" my-5 px-6 py-4 border-[2px] bg-white/75 shadow-sm rounded-md relative "
    >
      <Link
        className=" text-myColors-grey px-2 font-thin w-full"
        to={`/profile/${props?.post?.author?.id}`}
      >
        {" "}
        Postado por{" "}
        {props?.post?.author?.name ||
          props?.post?.author?.email ||
          props?.post?.author?.username}
      </Link>
      <header className="border-b w-full border-myColors-grey px-2 pb-2 font-bold text-lg mt-3 flex-wrap ">
        {props?.post?.title}
      </header>

      <body className="py-4 px-2 w-full text-justify bg-transparent">
        {props?.post?.content}
        {props.category && (
          <div style={categoryWrapper}>
            <strong>Categoria: {props.category.name}</strong>
          </div>
        )}
      </body>
      <FaEllipsisV
        onClick={toogleConfig}
        className="absolute top-6 right-8 cursor-pointer"
        color="grey"
      />
      {isOpen && <Configs className="absolute top-10 right-10" data={data} />}
    </div>
  );
}

function Configs(props) {
  return (
    <form
      className={`${props.className} flex flex-col bg-myColors-yellow rounded-lg`}
    >
      {props?.data.length > 0 &&
        props?.data?.map((item) => {
          return (
            <button
              className="bg-transparent p-2 m-2 font-semibold"
              type="button"
              onClick={item?.onClick}
            >
              {item?.text}
            </button>
          );
        })}
    </form>
  );
}
