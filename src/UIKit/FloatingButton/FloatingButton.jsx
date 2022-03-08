import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import PopModal from "../PopModal/PopModal";
import './FloatingButton.css'
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtonSize({variant}) {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);


  if (variant === "add") {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab onClick={onOpenModal} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <PopModal variant="add" open={open} closeIt={open => setOpen(false)}/>
      </Box>
    );

  }else{
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab onClick={onOpenModal} color="primary" variant="extended">
      <AddIcon sx={{pl:1}}/>
        לחץ להוספת ילד
      </Fab>
      <PopModal variant="addChild" open={open} closeIt={open => setOpen(false)}/>

    </Box>

    )
  }
 
}