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
  setAutomated,
  event,
  setEvent,
  manual,
  setManual,
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

  const [pin, setPin] = useState(["/pinblue.svg", "/filledpinblue.svg"]);

  const ref = useRef(null);

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
            {oneIndigo && (
              <Item className="p-0">
                <Cards
                  text="Indigo"
                  handlePinClick={handlePinClickOnIndigoLeft}
                  pin="/filledpinblue.svg"
                  automated={automated}
                  event={event}
                  manual={manual}
                />
              </Item>
            )}

            {oneRainbow && (
              <Item className="p-0">
                <Cards
                  text="Rainbow"
                  handlePinClick={handlePinClickOnRainbowLeft}
                  pin="/filledpinblue.svg"
                  automated={automated}
                  event={event}
                  manual={manual}
                />
              </Item>
            )}

            {oneClient && (
              <Item className="p-0">
                <Cards
                  text="Client 1"
                  handlePinClick={handlePinClickOnClientLeft}
                  pin="/filledpinblue.svg"
                  automated={automated}
                  event={event}
                  manual={manual}
                />
              </Item>
            )}

            {oneSecondClient && (
              <Item className="p-0">
                <Cards
                  text="Client 2"
                  handlePinClick={handlePinClickOnClientLeftTwo}
                  pin="/filledpinblue.svg"
                  automated={automated}
                  event={event}
                  manual={manual}
                />
              </Item>
            )}

            {oneThirdClient && (
              <Item className="p-0">
                <Cards
                  text="Client 3"
                  handlePinClick={handlePinClickOnClientLeftThree}
                  pin="/filledpinblue.svg"
                  automated={automated}
                  event={event}
                  manual={manual}
                />
              </Item>
            )}

            {/* second place */}

            {twoIndigo && (
              <Item className="p-0">
                <Cards
                  text="Indigo"
                  handlePinClick={handlePinClickOnIndigoLeft}
                  pin="/filledpinblue.svg"
                  automated={automated}
                  event={event}
                  manual={manual}
                />
              </Item>
            )}

            {twoRainbow && (
              <Item className="p-0">
                <Cards
                  text="Rainbow"
                  handlePinClick={handlePinClickOnRainbowLeft}
                  pin="/filledpinblue.svg"
                  automated={automated}
                  event={event}
                  manual={manual}
                />
              </Item>
            )}

            {twoClient && (
              <Item className="p-0">
                <Cards
                  text="Client 1"
                  handlePinClick={handlePinClickOnClientLeft}
                  pin="/filledpinblue.svg"
                  automated={automated}
                  event={event}
                  manual={manual}
                />
              </Item>
            )}

            {twoSecondClient && (
              <Item className="p-0">
                <Cards
                  text="Client 2"
                  handlePinClick={handlePinClickOnClientLeftTwo}
                  pin="/filledpinblue.svg"
                  automated={automated}
                  event={event}
                  manual={manual}
                />
              </Item>
            )}

            {twoThirdClient && (
              <Item className="p-0">
                <Cards
                  text="Client 3"
                  handlePinClick={handlePinClickOnClientLeftThree}
                  pin="/filledpinblue.svg"
                  automated={automated}
                  event={event}
                  manual={manual}
                />
              </Item>
            )}
          </Stack>
        </div>

        <Button
          onClick={() => {
            console.log(ref.current.scrollLeft);
            ref.current.scrollLeft -= 400;
          }}
        >
          Back
        </Button>

        {/* RHS */}
        <div className="overflow-x-hidden w-1/2  " ref={ref}>
          <Stack direction="row" spacing={2}>
            {indigoExist && (
              <Item className="p-0">
                <Cards
                  text="Indigo"
                  handlePinClick={handlePinClickOnIndigo}
                  pin="/pinblue.svg"
                />
              </Item>
            )}

            {rainbowExist && (
              <Item className="p-0">
                <Cards
                  text="Rainbow"
                  handlePinClick={handlePinClickOnRainbow}
                  pin="/pinblue.svg"
                />
              </Item>
            )}

            {clientOneExist && (
              <Item className="p-0">
                <Cards
                  text="Client 1"
                  handlePinClick={handlePinClickOnClient}
                  pin="/pinblue.svg"
                />
              </Item>
            )}

            {clientTwoExist && (
              <Item className="p-0">
                <Cards
                  text="Client 2"
                  handlePinClick={handlePinClickOnClientSecond}
                  pin="/pinblue.svg"
                />
              </Item>
            )}

            {clientThreeExist && (
              <Item className="p-0">
                <Cards
                  text="Client 3"
                  handlePinClick={handlePinClickOnClientThird}
                  pin="/pinblue.svg"
                />
              </Item>
            )}
          </Stack>
        </div>
        <Button
          onClick={() => {
            console.log(ref.current.scrollLeft);
            ref.current.scrollLeft += 400;
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Grids;
