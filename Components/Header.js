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

const Header = ({
  clientsIndigo,
  setClientsIndigo,
  clientsRainbow,
  setClientsRainbow,
  clientsClientOne,
  setClientsClientOne,
  clientsClientTwo,
  setClientsClientTwo,
  clientsClientThree,
  setClientsClientThree,
  automated,
  setAutomated,
  event,
  setEvent,
  manual,
  setManual,
  procOne,
  setProcOne,
  procTwo,
  setProcTwo,
  procThree,
  setProcThree,
  indigoExist,
  setIndigoExist,
  rainbowExist,
  setRainbowExist,
  clientOneExist,
  setClientOneExist,
  clientTwoExist,
  setClientTwoExist,
  clientThreeExist,
  setClientThreeExist,
}) => {
  const [value, setValue] = useState(new Date());
  const [isDate, setIsDate] = useState(false);

  const handleClickOnDate = (e) => {
    e.preventDefault();
    setIsDate(!isDate);
    console.log(isDate);
  };

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
    <div className="z-20">
      <div>
        <div className="flex flex-row justify-between p-5 ">
          <div className="flex flex-row justify-between text-xl">
            <div className="flex flex-row justify-between p-5 items-center">
              Status Monitor
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  sx={{ flexDirection: "row-reverse" }}
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
            Hi this is a description of the project , yet to learn to use redux.
            The services can be filtered only when on the feft hand side tookit
          </Paper>
        </div>

        <Paper elevation={4} className="p-2">
          <div className="flex flex-row space-x-24  z-20">
            <Sample
              clientsIndigo={clientsIndigo}
              setClientsIndigo={setClientsIndigo}
              clientsRainbow={clientsRainbow}
              setClientsRainbow={setClientsRainbow}
              clientsClientOne={clientsClientOne}
              setClientsClientOne={setClientsClientOne}
              clientsClientTwo={clientsClientTwo}
              setClientsClientTwo={setClientsClientTwo}
              clientsClientThree={clientsClientThree}
              setClientsClientThree={setClientsClientThree}
              automated={automated}
              setAutomated={setAutomated}
              event={event}
              setEvent={setEvent}
              manual={manual}
              setManual={setManual}
              procOne={procOne}
              setProcOne={setProcOne}
              procTwo={procTwo}
              setProcTwo={setProcTwo}
              procThree={procThree}
              indigoExist={indigoExist}
              setIndigoExist={setIndigoExist}
              rainbowExist={rainbowExist}
              setRainbowExist={setRainbowExist}
              clientOneExist={clientOneExist}
              setClientOneExist={setClientOneExist}
              clientTwoExist={clientTwoExist}
              setClientTwoExist={setClientTwoExist}
              clientThreeExist={clientThreeExist}
              setClientThreeExist={setClientThreeExist}
              setProcThree={setProcThree}
              category="clients"
              para1="Indigo"
              para2="Rainbow"
              para3="Client 1"
              para4="Client 2"
              para5="Client 3"
            />
            <Sample
              clientsIndigo={clientsIndigo}
              setClientsIndigo={setClientsIndigo}
              clientsRainbow={clientsRainbow}
              setClientsRainbow={setClientsRainbow}
              clientsClientOne={clientsClientOne}
              setClientsClientOne={setClientsClientOne}
              clientsClientTwo={clientsClientTwo}
              setClientsClientTwo={setClientsClientTwo}
              clientsClientThree={clientsClientThree}
              setClientsClientThree={setClientsClientThree}
              automated={automated}
              setAutomated={setAutomated}
              event={event}
              setEvent={setEvent}
              manual={manual}
              setManual={setManual}
              procOne={procOne}
              setProcOne={setProcOne}
              procTwo={procTwo}
              setProcTwo={setProcTwo}
              procThree={procThree}
              indigoExist={indigoExist}
              setIndigoExist={setIndigoExist}
              rainbowExist={rainbowExist}
              setRainbowExist={setRainbowExist}
              clientOneExist={clientOneExist}
              setClientOneExist={setClientOneExist}
              clientTwoExist={clientTwoExist}
              setClientTwoExist={setClientTwoExist}
              clientThreeExist={clientThreeExist}
              setClientThreeExist={setClientThreeExist}
              setProcThree={setProcThree}
              category="service"
              para1="Process 1"
              para2="Process 2"
              para3="Process 3"
            />
            <Sample
              clientsIndigo={clientsIndigo}
              setClientsIndigo={setClientsIndigo}
              clientsRainbow={clientsRainbow}
              setClientsRainbow={setClientsRainbow}
              clientsClientOne={clientsClientOne}
              setClientsClientOne={setClientsClientOne}
              clientsClientTwo={clientsClientTwo}
              setClientsClientTwo={setClientsClientTwo}
              clientsClientThree={clientsClientThree}
              setClientsClientThree={setClientsClientThree}
              automated={automated}
              setAutomated={setAutomated}
              event={event}
              setEvent={setEvent}
              manual={manual}
              setManual={setManual}
              procOne={procOne}
              setProcOne={setProcOne}
              procTwo={procTwo}
              setProcTwo={setProcTwo}
              procThree={procThree}
              indigoExist={indigoExist}
              setIndigoExist={setIndigoExist}
              rainbowExist={rainbowExist}
              setRainbowExist={setRainbowExist}
              clientOneExist={clientOneExist}
              setClientOneExist={setClientOneExist}
              clientTwoExist={clientTwoExist}
              setClientTwoExist={setClientTwoExist}
              clientThreeExist={clientThreeExist}
              setClientThreeExist={setClientThreeExist}
              setProcThree={setProcThree}
              category="Tasks"
              para1="Automated"
              para2="Event Based"
              para3="Manual"
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
