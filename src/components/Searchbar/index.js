import * as React from "react";
import SearchIcon from "../Icon/SearchIcon";

export default function Searchbar(props) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`max-w-full min-w-full mt-5 rounded-md bg-white self-center h-[46px]  flex flex-row justify-between border border-black ${props.className}`}
    >
      <input
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        className="w-full border-0 pl-[0.875rem] text-[0.875rem] focus:outline-none outline-none text-black font-poppins-regular text-sm tracking-[0.016rem]"
        placeholder={props.placeHolder}
      ></input>
      <button
        className="pr-[24px] py-[14px] w-[19px] h-[18px] min-w-0 box-content border-0  outline-none  hover:bg-transparent focus:bg-transparent "
        type="button"
      >
        <SearchIcon className="outline-none border-0" />
      </button>
    </form>
  );
}
