import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
} from "@material-ui/core";
import StarRating from "./StarRating";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const useStyles = makeStyles({
  root: {
    width: "50%",
    justifyContent: "center",
    display: "flex",
    marginTop: "20%",
    alignItems: "center",
  },
  window: {
    display: "flex",
    direction: "column",
    width: "400px",
    heigth: "400px",
    border: "1px solid black",
  },
});

export default function RateDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        <Fab variant="extended">
          <RateReviewOutlinedIcon />
          Leave a feedback
        </Fab>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <DialogTitle id="form-dialog-title">Ratings</DialogTitle>
          <StarRating />

          <DialogContent className={classes.window}>
            <TextField
              autoFocus
              margin="dense"
              name="comment"
              id="name"
              label="Leave your comments here"
              type="Comments"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" variant="contained">
              <SendOutlinedIcon />
              Send
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
    </div>
  );
}
