import Switch from "@material-ui/core/Switch";

import { useState } from "react";
import DatePicker from "@mui/lab/DatePicker";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

import Sample from "./Sample";

const Header = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [value, setValue] = useState(new Date());
  const [isDate, setIsDate] = useState(false);

  const handleClickOnDate = (e) => {
    e.preventDefault();
    setIsDate(!isDate);
    console.log(isDate);
  };

  //for navbars
  const [client, setClient] = useState(false);
  const [service, setService] = useState(false);
  const [task, setTask] = useState(false);

  const handleClient = () => {
    setClient(!client);
    console.log("cliecked client", client);
  };
  const handleService = () => {
    setService(!service);
    console.log("cliecked service", service);
  };
  const handleTask = () => {
    setTask(!task);
    console.log("cliecked task");
  };

  //navbars

  return (
    <div>
      <div>
        <div className="flex flex-row justify-between p-5 ">
          <div className="flex flex-row justify-between text-xl">
            <div className="flex flex-row justify-between p-5 items-center">
              Status Monitor
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  className="flex text-red-400"
                  views={["day"]}
                  label="Pick a date !"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} helperText={null} />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="flex flex-row justify-center relative">
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Auto refresh"
              className="flex  justify-center items-center "
            />
          </div>
        </div>
        <div>
          <Paper elevation={4} className="p-2">
            Hi this is a description of the project , doubleclick to move Icon
          </Paper>
        </div>

        <Paper elevation={4} className="p-2">
          <div className="flex flex-row space-x-24  ">
            <Sample
              category="clients"
              para1="client 1"
              para2="client 2"
              para3="client 3"
            />
            <Sample
              category="service"
              para1="proc 1"
              para2="proc 2"
              para3="proc 3"
            />
            <Sample
              category="button"
              para1="automated"
              para2="event based"
              para3="manual"
            />
            <div className="flex relative items-center">
              <input
                type="text"
                name="search"
                id="search"
                className="w-60 p-2 rounded-full  border-white border-none border-0 "
                placeholder="Search"
              />
              <button>
                <Image src="/search.svg" height="30px" width="30px" />
              </button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Header;
