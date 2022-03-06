import React from "react";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Brightness5RoundedIcon from "@mui/icons-material/Brightness5Rounded";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";

const Category = () => {
  return (
    <div className="p-2">
      <Paper className="h-10 flex items-center space-x-7">
        <div className="flex items-center">
          <img src="/black.svg" alt="black" />

          <span>Not branched</span>
        </div>
        <div className="flex items-center">
          <img src="/bred.svg" alt="black" />
          <span>Branched</span>
        </div>
        <div className="flex items-center">
          <img src="/bblack.svg" alt="black" />
          <span>Not branched</span>
        </div>
        <div className="flex items-center">
          <img src="/bborange.svg" alt="black" />
          <span>Branched</span>
        </div>
        <div className="flex items-center">
          <img src="/bbbgreen.svg" alt="black" />
          <span>Not branched</span>
        </div>
        <div className="flex items-center">
          <img src="/bbbred.svg" alt="black" />
          <span>Branched</span>
        </div>
      </Paper>
    </div>
  );
};

export default Category;
