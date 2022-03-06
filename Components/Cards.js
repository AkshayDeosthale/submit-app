import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Cards = ({ text, transfer }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        {text}
        <button onClick={transfer}>
          <img src="/pinblue.svg" />
        </button>
      </div>
      <div className="overflow-y-hidden">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Accounting
              <div>
                <span className="text-sm">Started</span>
                <span className="text-sm">NotStarted</span>
                <span className="text-sm">Completed</span>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Box sx={{ width: "100%" }}>
                <LinearProgress value={1} />
              </Box>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Reconsiliation
              <div>
                <span className="text-sm">Started</span>
                <span className="text-sm">NotStarted</span>
                <span className="text-sm">Completed</span>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Box sx={{ width: "100%" }}>
                <LinearProgress value={1} />
              </Box>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Finantial reporting
              <div>
                <span className="text-sm">Started</span>
                <span className="text-sm">NotStarted</span>
                <span className="text-sm">Completed</span>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Box sx={{ width: "100%" }}>
                <LinearProgress value={1} />
              </Box>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Cards;
