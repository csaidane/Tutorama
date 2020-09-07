import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  Dialog,
  Fab,
  DialogContentText,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core/";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {},
}));

export default function MessageButton(props) {
  const classes = useStyles();

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
      <Fab variant="extended" color="primary" onClick={handleClickOpen}>
        <SendOutlinedIcon className={classes.extendedIcon} />
        Send a message
      </Fab>

      <Dialog
        open={open}
        onClose={messageSendAndHandleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Send Message</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will be the beginning of your conversation with{" "}
            {props.tutor.name}
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
