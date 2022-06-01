import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { colors } from "../../../lib/themeColors";
import { submit } from "redux-form";

export default function PostItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toogleConfig = () => {
    setIsOpen((prev) => !prev);
  };

  const data = [
    props?.isOwner ? { text: "Deletar", id: 0 } : null,
    props?.isOwner ? { text: "Editar", id: 1 } : null,
  ];
  return (
    <div className="  m-5 px-6 py-4 border-[2px] bg-white/75 shadow-sm rounded-md relative ">
      <header className=" text-myColors-grey px-2 font-thin w-full">
        Postado por{" "}
        {props?.author?.name || props?.author?.email || props?.author?.username}
      </header>
      <header className="border-b w-full border-myColors-grey px-2 pb-2 font-bold text-lg mt-3 flex-wrap ">
        {props.title}
      </header>

      <body className="py-4 px-2 w-full text-justify bg-transparent">
        {props.content}
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
    <div className={`bg-white ${props.className}`}>
      {props?.data.length > 0 &&
        props?.data?.map((item) => {
          return <div>{item.text}</div>;
        })}
    </div>
  );
}
