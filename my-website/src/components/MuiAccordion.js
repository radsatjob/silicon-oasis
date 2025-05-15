import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MuiAccordion({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="subtitle1"
            sx={{
                fontWeight: 'bold',
                color: 'blue',
            '&:hover': {
                color: 'green',
                textDecoration: 'underline',
                cursor: 'pointer',
            },
        }}
    >
  {item.title}
</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
