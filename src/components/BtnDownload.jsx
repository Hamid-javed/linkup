import React from "react";

const BtnDownload = ({ icon ,app }) => {
  return (
    <div className="bg-black flex justify-between items-center w-40 px-3 py-1 mt-5 cursor-pointer active:scale-95">
      {icon}
      <div className=" flex flex-col justify-center items-center">
        <p>Download For</p>
        <h1>{app}</h1>
      </div>
    </div>
  );
};

export default BtnDownload;
