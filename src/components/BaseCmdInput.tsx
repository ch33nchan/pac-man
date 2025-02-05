import React from "react";
import { GiCircle } from "react-icons/gi"; // Using GiCircle instead of GiPacman
import { FaGhost } from "react-icons/fa";

interface BaseCmdInputProps {
  Children: React.ReactNode;
  CmdStatus?: React.ReactNode;
}

export default function BaseCmdInput({
  Children,
  CmdStatus,
}: BaseCmdInputProps) {
  const openResume = () => {
    window.open("https://drive.google.com/file/d/1PosjEzGEHHone4TWK6byiSun8_XgXNlS/view?usp=sharing", "_blank");
  };

  return (
    <div className="mt-2 mb-2">
      <div className="flex items-center">
        <div className="w-5 h-1 bg-yellow-400"></div>
        <div className="flex gap-1 items-center bg-black pl-2">
          <GiCircle className="text-xl text-yellow-400 animate-pulse" /> {/* Changed from GiPacman to GiCircle */}
          <h1 className="text-yellow-400">PAC_DEV</h1>
        </div>
        <div
          className="w-5 h-7 bg-black z-20"
          style={{
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
          }}
        ></div>
        <div className="flex items-center">
          <div className="bg-black -translate-x-5">
            <div
              className="bg-blue-500 w-24 h-8 rounded-full flex items-center justify-center gap-2"
              onClick={openResume}
              style={{ cursor: "pointer" }}
            >
              <FaGhost className="text-white animate-bounce" />
              <span className="text-white">resume</span>
            </div>
          </div>
          <div
            className="-translate-x-5 w-5 h-7 border-l-2 border-black bg-black z-20"
            style={{
              clipPath: "polygon(0 0, 100% 50%, 0 100%)",
            }}
          ></div>
          <>{CmdStatus}</>
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-10 w-1 bg-yellow-400 -translate-y-3"></div>
        <div className="">
          <div className="h-1 w-4 bg-yellow-400 translate-y-2 -translate-x-1"></div>
        </div>
        <div className="translate-y-2 -translate-x-3">
          <GiCircle className="text-2xl text-yellow-400" /> {/* Changed from GiPacman to GiCircle */}
        </div>
        <>{Children}</>
      </div>
    </div>
  );
}
