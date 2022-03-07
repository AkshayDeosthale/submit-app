import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Checkbox from "@mui/material/Checkbox";

const Sample = ({
  category,
  para1,
  para2,
  para3,
  para4,
  para5,
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
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  //checkboxes

  const [checked, setChecked] = useState(true);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const [checkedPosTwo, setCheckedPosTwo] = useState(true);
  const [checkedPosTwoTwo, setCheckedPosTwoTwo] = useState(false);

  const [checkedPosThree, setCheckedPosThree] = useState(true);
  const [checkedPosThreeTwo, setCheckedPosThreeTwo] = useState(false);

  const [checkedPosFour, setCheckedPosFour] = useState(true);
  const [checkedPosFourTwo, setCheckedPosFourTwo] = useState(false);

  const [checkedPosFive, setCheckedPosFive] = useState(true);
  const [checkedPosFiveTwo, setCheckedPosFiveTwo] = useState(false);

  useEffect(() => {
    setClientsIndigo(!clientsIndigo);
    setClientsRainbow(!clientsRainbow);
    setClientsClientOne(!clientsClientOne);
    setClientsClientTwo(!clientsClientTwo);
    setClientsClientThree(!clientsClientThree);

    setAutomated(!automated);
    setEvent(!event);
    setManual(!manual);
  }, []);

  const handleClickPosOne = () => {
    setChecked(!checked);
    setCheckedTwo(!checkedTwo);

    if (para1 === "Indigo") {
      setClientsIndigo(!clientsIndigo);
      setIndigoExist(!indigoExist);
    }
    if (para1 === "Automated") {
      setAutomated(!automated);
    }
  };
  const handleClickPosTwo = () => {
    setCheckedPosTwo(!checkedPosTwo);
    setCheckedPosTwoTwo(!checkedPosTwoTwo);

    if (para2 === "Rainbow") {
      setClientsRainbow(!clientsRainbow);
      setRainbowExist(!rainbowExist);
    }
    if (para2 === "Event Based") {
      setEvent(!event);
    }
  };
  const handleClickPosThree = () => {
    setCheckedPosThree(!checkedPosThree);
    setCheckedPosThreeTwo(!checkedPosThreeTwo);

    if (para3 === "Client 1") {
      setClientsClientOne(!clientsClientOne);
      setClientOneExist(!clientOneExist);
    } else if (para3 === "Manual") {
      setManual(!manual);
    } else {
      console.log("position proccess 1 is clicked");
    }
  };
  const handleClickPosFour = () => {
    setCheckedPosFour(!checkedPosFour);
    setCheckedPosFourTwo(!checkedPosFourTwo);

    setClientsClientTwo(!clientsClientTwo);
    setClientTwoExist(!clientTwoExist);
    console.log("clientsClientTwo", clientsClientTwo);
  };
  const handleClickPosFive = () => {
    setCheckedPosFive(!checkedPosFive);
    setCheckedPosFiveTwo(!checkedPosFiveTwo);

    setClientsClientThree(!clientsClientThree);
    setClientThreeExist(!clientThreeExist);
    console.log("clientsClientThree", clientsClientThree);
  };

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {category} <KeyboardArrowDownIcon />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <MenuList className="flex flex-col w-32 space-y-2  items-start bg-white z-10">
                <MenuItem>
                  {checked && <Checkbox onClick={handleClickPosOne} checked />}
                  {checkedTwo && <Checkbox onClick={handleClickPosOne} />}

                  {para1}
                </MenuItem>

                <MenuItem>
                  {checkedPosTwo && (
                    <Checkbox onClick={handleClickPosTwo} checked />
                  )}
                  {checkedPosTwoTwo && <Checkbox onClick={handleClickPosTwo} />}
                  {para2}
                </MenuItem>
                <MenuItem>
                  {checkedPosThree && (
                    <Checkbox onClick={handleClickPosThree} checked />
                  )}
                  {checkedPosThreeTwo && (
                    <Checkbox onClick={handleClickPosThree} />
                  )}
                  {para3}
                </MenuItem>
                {para4 && (
                  <MenuItem>
                    {checkedPosFour && (
                      <Checkbox onClick={handleClickPosFour} checked />
                    )}
                    {checkedPosFourTwo && (
                      <Checkbox onClick={handleClickPosFour} />
                    )}
                    {para4}
                  </MenuItem>
                )}
                {para5 && (
                  <MenuItem>
                    {checkedPosFive && (
                      <Checkbox onClick={handleClickPosFive} checked />
                    )}
                    {checkedPosFiveTwo && (
                      <Checkbox onClick={handleClickPosFive} />
                    )}
                    {para5}
                  </MenuItem>
                )}
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Sample;
