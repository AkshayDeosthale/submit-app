import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Cards = ({ text, handlePinClick, pin, automated, event, manual }) => {
  return (
    <div>
      <div className="flex w-72 p-0 justify-between">
        <span className="text-lg"> {text}</span>
        <button onClick={handlePinClick}>
          <img src={pin} />
        </button>
      </div>
      <div>
        {!automated && (
          <Accordion className="p-0 border-l-4 pl-5 border-purple-600">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="p-0  w-full">
                <div className="p-0 space-y-5">
                  <div className="p-0 font-bold">Accounting</div>
                  <div className="p-0 flex justify-between w-full space-x-8">
                    <div className="p-0 flex flex-col justify-center items-center">
                      <div className="p-0 text-sm">Started</div>
                      <div>Image</div>
                    </div>
                    <div className="p-0 flex flex-col justify-center items-center">
                      <div className="p-0 text-sm">NotStarted</div>
                      <div>Image</div>
                    </div>
                    <div className="p-0 flex flex-col justify-center items-center">
                      <div className="p-0 text-sm">Completed</div>
                      <div>Image</div>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="p-0 w-400 flex flex-col items-start justify-start">
              <div className="p-0 w-full">
                <div className="p-0 w-full">
                  <div className="flex justify-between w-full ">
                    <span className="font-bold">Cash reacon with CP</span>
                    <img src="/dot.svg" alt="dot" />
                  </div>
                  <div className="flex justify-between w-full ">
                    <button className="bg-red-400 text-white p-2 rounded-md">
                      Breach installed
                    </button>

                    <span>time</span>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        )}
        {!event && (
          <Accordion className="p-0 border-l-4 pl-5 border-yellow-600">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="p-0  w-full">
                <div className="p-0 space-y-5">
                  <div className="p-0 font-bold">Reconciliation</div>
                  <div className="p-0 flex justify-between w-full space-x-8">
                    <div className="p-0 flex flex-col justify-center items-center">
                      <div className="p-0 text-sm">Started</div>
                      <div>Image</div>
                    </div>
                    <div className="p-0 flex flex-col justify-center items-center">
                      <div className="p-0 text-sm">NotStarted</div>
                      <div>Image</div>
                    </div>
                    <div className="p-0 flex flex-col justify-center items-center">
                      <div className="p-0 text-sm">Completed</div>
                      <div>Image</div>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="p-0 w-full flex flex-col items-start justify-start">
              <div className="p-0 w-full">
                <div className="p-0 w-full">
                  <div className="flex justify-between w-full ">
                    <span className="font-bold">Cash reacon with CP</span>
                    <img src="/dot.svg" alt="dot" />
                  </div>
                  <div className="flex justify-between w-full ">
                    <button className="bg-gray-400 text-black p-2 rounded-md">
                      To be started
                    </button>
                    <span>time</span>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        )}
        {!manual && (
          <Accordion className="p-0 border-l-4 pl-5 border-green-600">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="p-0  w-full">
                <div className="p-0 space-y-5">
                  <div className="p-0 font-bold">Financial reporting</div>
                  <div className="p-0 flex justify-between w-full space-x-8 ">
                    <div className="p-0 flex flex-col justify-center items-center">
                      <div className="p-0 text-sm">Started</div>
                      <div>Image</div>
                    </div>
                    <div className="p-0 flex flex-col justify-center items-center">
                      <div className="p-0 text-sm">NotStarted</div>
                      <div>Image</div>
                    </div>
                    <div className="p-0 flex flex-col justify-center items-center">
                      <div className="p-0 text-sm">Completed</div>
                      <div>Image</div>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="p-0  flex flex-col items-start justify-start">
              <div className="p-0 w-full">
                <div className="p-0 w-full">
                  <div className="flex justify-between w-full ">
                    <span className="font-bold">Cash reacon with CP</span>
                    <img src="/dot.svg" alt="dot" />
                  </div>
                  <div className="flex justify-between w-full ">
                    <button className="bg-gray-400 text-black p-2 rounded-md">
                      To be started
                    </button>
                    <span>time</span>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    </div>
  );
};

export default Cards;
