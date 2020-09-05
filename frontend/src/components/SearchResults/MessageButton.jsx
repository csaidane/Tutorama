import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function MessageButton(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const messageSendAndHandleClose = () => {
    props.sendAPI();
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        SEND A MESSAGE
      </Button>
      <Dialog
        open={open}
        onClose={messageSendAndHandleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Send Message</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will be the beginning of your conversation with {props.tutor.name}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Message"
            label="Message"
            type="email"
            fullWidth
            value={props.firstMessage}
            onChange={(e) => props.setFirstMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={messageSendAndHandleClose} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
