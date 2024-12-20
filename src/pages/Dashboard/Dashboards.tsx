import { useState } from "react";
import {
  MdClose,
  MdLibraryBooks,
  MdOutlineFormatLineSpacing,
  MdOutlineLocalLibrary,
} from "react-icons/md";
const Dashboards = () => {
  return (
    <div className="flex flex-col">
      {/* <div className="w-full h-[14vh] fixed"></div> */}
      <main className="grid grid-cols-8 gap-3  relative  ">
        <main className=" col-span-2 rounded-md border bg-slate-100 sticky top-0 h-screen overflow-hidden ">
          <div className="flex flex-col gap-2 h-[20vh] font-semibold cursor-pointer">
            <div className="w-full h-[60px] hover:bg-slate-200 mt-5 m-4 p-4 flex gap-3  items-center justify-start">
              <p className="text-[23px] hover:animate-spin transition-all">+</p>
              <p> For you </p>
            </div>
            <div className="w-full h-[60px] hover:bg-slate-200 mt-5 m-4 p-4 flex justify-start items-center gap-3">
              <MdLibraryBooks />
              <p>
                {" "}
                <p> Dictionary</p>
              </p>
            </div>
            <div className="w-full h-[60px] hover:bg-slate-200 m-4 mt-5 p-4 flex gap-3 items-center justify-start">
              <MdOutlineLocalLibrary />
              <p> Grammer</p>
            </div>
          </div>
        </main>
        <main className="col-span-4 rounded-md border min-h-[400px] bg-slate-50 ">
          <div className="mt-20">
            <WritePost />
            <div className="border rounded-md  bg-white m-4 p-4 flex gap-2 ">
              <div className="w-10 h-10 rounded-full bg-slate-200"></div>{" "}
              <div>
                <p className="text-[12px] font-semibold">name</p>
                <p className="text-[8px] font-semibold">Time</p>
              </div>
            </div>
          </div>
        </main>
        <main className="col-span-2 rounded-md border min-h-[400px] bg-slate-100 sticky top-0 h-screen   overflow-hidden  "></main>
      </main>
    </div>
  );
};

export default Dashboards;

export const WritePost = () => {
  const [tap, seTtapped] = useState<boolean>(false);
  return (
    <div className="m-4 p-4 relative">
      <button
        className="px-3 py-3 bg-blue-400 text-center rounded-md font-semibold text-white flex items-center m-4 p-4 justify-start gap-4"
        onClick={() => seTtapped(!tap)}
      >
        <MdOutlineFormatLineSpacing />
        <p className="text-[10px] font-semibold">Write</p>
      </button>

      {tap && (
        <div className="w-[400px] min-h-[250px] rounded-md top-0 left-0 absolute border flex flex-col gap-7 bg-blue-200  opacity-1">
          <div className="w-full flex justify-end items-center mt-3">
            <div className="w-10 h-10 rounded-full hover:bg-slate-400 items-center justify-center flex mr-5">
              <MdClose
                className="cursor-pointer"
                onClick={() => seTtapped(false)}
              />
            </div>
          </div>
          <div className="w-full items-center justify-around flex mt-3 font-semibold">
            <p>Word</p>
            <p>Slangs</p>
          </div>
          <div className="w-full items-center justify-around flex">
            <textarea
              name=""
              id=""
              placeholder="Write a Word"
              className="outline-none rounded-md "
            ></textarea>
            <textarea
              name=""
              id=""
              placeholder="Write a slangs"
              className="outline-none rounded-md"
            ></textarea>
          </div>
          <div className="w-full items-end justify-end flex ">
            <button className="px-1 py-1 rounded-md text-white bg-blue-400 mr-3">
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
