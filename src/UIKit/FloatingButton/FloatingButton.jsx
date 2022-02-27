import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import PopModal from "../PopModal/PopModal";


export default function FloatingActionButtonSize() {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);



  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab onClick={onOpenModal} color="warning" aria-label="add">
        <AddIcon />
      </Fab>
      <PopModal variant="add" open={open} closeIt={open => setOpen(false)}/>
    </Box>
  );
}