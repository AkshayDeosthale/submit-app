import React, { useRef, useState } from "react";
import Cards from "./Cards";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

const Grids = ({
  clientsIndigo,
  clientsRainbow,
  clientsClientOne,
  clientsClientTwo,
  clientsClientThree,
  automated,
  event,
  manual,
  procOne,
  procTwo,
  procThree,
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
  // states to maintain Cards

  //LHS
  const [oneIndigo, setOneIndigo] = useState(false);
  const [twoIndigo, setTwoIndigo] = useState(false);

  const [oneRainbow, setOneRainbow] = useState(false);
  const [twoRainbow, setTwoRainbow] = useState(false);

  const [oneClient, setOneClient] = useState(false);
  const [twoClient, setTwoClient] = useState(false);

  const [oneSecondClient, setOneSecondClient] = useState(false);
  const [twoSecondClient, setTwoSecondClient] = useState(false);

  const [oneThirdClient, setOneThirdClient] = useState(false);
  const [twoThirdClient, setTwoThirdClient] = useState(false);

  //blanks
  const [blankOne, setBlankOne] = useState(true);
  const [blankTwo, setBlankTwo] = useState(true);

  //from header toggles

  //functions for each RHS tab
  const handlePinClickOnIndigo = () => {
    if (blankOne == true) {
      setOneIndigo(true);
      setIndigoExist(false);
      setBlankOne(false);
    } else if (blankTwo == true) {
      setTwoIndigo(true);
      setIndigoExist(false);
      setBlankTwo(false);
    } else {
      console.log("No space availalable for indigo");
    }
  };

  const handlePinClickOnRainbow = () => {
    if (blankOne == true) {
      setOneRainbow(true);
      setRainbowExist(false);
      setBlankOne(false);
    } else if (blankTwo == true) {
      setTwoRainbow(true);
      setRainbowExist(false);
      setBlankTwo(false);
    } else {
      console.log("No space availalable for rainbow");
    }
  };

  const handlePinClickOnClient = () => {
    if (blankOne == true) {
      setOneClient(true);
      setClientOneExist(false);
      setBlankOne(false);
    } else if (blankTwo == true) {
      setTwoClient(true);
      setClientOneExist(false);
      setBlankTwo(false);
    } else {
      console.log("No space availalable for rainbow");
    }
  };

  const handlePinClickOnClientSecond = () => {
    if (blankOne == true) {
      setOneSecondClient(true);
      setClientTwoExist(false);
      setBlankOne(false);
    } else if (blankTwo == true) {
      setTwoSecondClient(true);
      setClientTwoExist(false);
      setBlankTwo(false);
    } else {
      console.log("No space availalable for rainbow");
    }
  };

  const handlePinClickOnClientThird = () => {
    if (blankOne == true) {
      setOneThirdClient(true);
      setClientThreeExist(false);
      setBlankOne(false);
    } else if (blankTwo == true) {
      setTwoThirdClient(true);
      setClientThreeExist(false);
      setBlankTwo(false);
    } else {
      console.log("No space availalable for rainbow");
    }
  };

  //function for eact LHS tab

  const handlePinClickOnIndigoLeft = () => {
    if (oneIndigo == true) {
      setOneIndigo(false);
      setIndigoExist(true);
      setBlankOne(true);
    } else {
      setTwoIndigo(false);
      setIndigoExist(true);
      setBlankTwo(true);
    }
  };

  const handlePinClickOnRainbowLeft = () => {
    if (oneRainbow == true) {
      setOneRainbow(false);
      setRainbowExist(true);
      setBlankOne(true);
    } else {
      setTwoRainbow(false);
      setRainbowExist(true);
      setBlankTwo(true);
    }
  };

  const handlePinClickOnClientLeft = () => {
    console.log("client left");
    if (oneClient == true) {
      setOneClient(false);
      setClientOneExist(true);
      setBlankOne(true);
    } else {
      setTwoClient(false);
      setClientOneExist(true);
      setBlankTwo(true);
    }
  };

  const handlePinClickOnClientLeftTwo = () => {
    console.log("ClientSecond LHS");
    if (oneSecondClient == true) {
      setOneSecondClient(false);
      setClientTwoExist(true);
      setBlankOne(true);
    } else {
      setTwoSecondClient(false);
      setClientTwoExist(true);
      setBlankTwo(true);
    }
  };
  const handlePinClickOnClientLeftThree = () => {
    console.log("ClientThree LHS");
    if (oneThirdClient == true) {
      setOneThirdClient(false);
      setClientThreeExist(true);
      setBlankOne(true);
    } else {
      setTwoThirdClient(false);
      setClientThreeExist(true);
      setBlankTwo(true);
    }
  };

  // this for the cards
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "start",
    color: theme.palette.text.secondary,
  }));

  //scroll Buttons

  return (
    <div className="h-auto">
      <div className="flex flex-row space-x-12 justify-between items-start right-10">
        <div className="w-1/2">
          <Stack direction="row" spacing={2}>
            <Item className="p-0">
              {oneIndigo && (
                <Cards
                  text="Indigo"
                  handlePinClick={handlePinClickOnIndigoLeft}
                />
              )}
            </Item>
            <Item className="p-0">
              {oneRainbow && (
                <Cards
                  text="Rainbow"
                  handlePinClick={handlePinClickOnRainbowLeft}
                />
              )}
            </Item>
            <Item className="p-0">
              {oneClient && (
                <Cards
                  text="Client 1"
                  handlePinClick={handlePinClickOnClientLeft}
                />
              )}
            </Item>
            <Item className="p-0">
              {oneSecondClient && (
                <Cards
                  text="Client 2"
                  handlePinClick={handlePinClickOnClientLeftTwo}
                />
              )}
            </Item>
            <Item className="p-0">
              {oneThirdClient && (
                <Cards
                  text="Client 3"
                  handlePinClick={handlePinClickOnClientLeftThree}
                />
              )}
            </Item>

            {/* second place */}

            <Item className="p-0">
              {twoIndigo && (
                <Cards
                  text="Indigo"
                  handlePinClick={handlePinClickOnIndigoLeft}
                />
              )}
            </Item>
            <Item className="p-0">
              {twoRainbow && (
                <Cards
                  text="Rainbow"
                  handlePinClick={handlePinClickOnRainbowLeft}
                />
              )}
            </Item>
            <Item className="p-0">
              {twoClient && (
                <Cards
                  text="Client 1"
                  handlePinClick={handlePinClickOnClientLeft}
                />
              )}
            </Item>
            <Item className="p-0">
              {twoSecondClient && (
                <Cards
                  text="Client 2"
                  handlePinClick={handlePinClickOnClientLeftTwo}
                />
              )}
            </Item>
            <Item className="p-0">
              {twoThirdClient && (
                <Cards
                  text="Client 3"
                  handlePinClick={handlePinClickOnClientLeftThree}
                />
              )}
            </Item>
          </Stack>
        </div>

        <Button>Back</Button>

        {/* RHS */}
        <div className="overflow-x-scroll w-1/2  ">
          <Stack direction="row" spacing={2}>
            <Item className="p-0">
              {indigoExist && (
                <Cards text="Indigo" handlePinClick={handlePinClickOnIndigo} />
              )}
            </Item>
            <Item className="p-0">
              {rainbowExist && (
                <Cards
                  text="Rainbow"
                  handlePinClick={handlePinClickOnRainbow}
                />
              )}
            </Item>
            <Item className="p-0">
              {clientOneExist && (
                <Cards
                  text="Client 1"
                  handlePinClick={handlePinClickOnClient}
                />
              )}
            </Item>
            <Item className="p-0">
              {clientTwoExist && (
                <Cards
                  text="Client 2"
                  handlePinClick={handlePinClickOnClientSecond}
                />
              )}
            </Item>
            <Item className="p-0">
              {clientThreeExist && (
                <Cards
                  text="Client 3"
                  handlePinClick={handlePinClickOnClientThird}
                />
              )}
            </Item>
          </Stack>
        </div>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Grids;
