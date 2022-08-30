import React from "react";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ExpandMore } from "@mui/icons-material";
const Home = () => {
  return (
    <>
      <Container>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} id="accordion1">
            <Typography>Home</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>home page</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} id="accordion2">
            <Typography>Home</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>home page</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} id="accordion3">
            <Typography>Home</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>home page</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} id="accordion4">
            <Typography>Home</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>home page</Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
};

export default Home;
