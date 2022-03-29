import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  return (
    <div >
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>אתה עומד להזמין תור חדש</DialogTitle>
        <DialogContent>
          <DialogContentText>
           הנני מאשר שכל הפרטים שמילאתי הם נכונים ושייכים לי
          </DialogContentText>
        </DialogContent>
        <DialogActions type="submit">
          <Button type="submit" onClick={handleClose}>בטל</Button>
          <Button type="submit" onClick={handleClose}>אשר</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}