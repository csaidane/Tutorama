import React, { useState } from "react";
import axios from "axios";

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
    width: "400px",
    heigth: "400px",
    border: "1px solid black",
  },
});

export default function RateDialog(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
  const [comment, setComment] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitClose = function () {
    let review = {
      comment: comment,
      reviewed_id: props.tutor.tutor_id,
      reviewer_id: props.userId,
      rating: value,
    };
    axios({
      url: "/api/tutors/reviews/add",
      data: review,
      method: "POST",
    }).then((results) => {
      setComment("");
      setValue(3);
      setOpen(false);
      props.APIGetReviews(props.tutor.tutor_id);
    });
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
          <StarRating
            setValue={setValue}
            setHover={setHover}
            value={value}
            hover={hover}
          />

          <DialogContent className={classes.window}>
            <TextField
              autoFocus
              margin="dense"
              name="comment"
              id="name"
              label="Leave your comments here"
              type="Comments"
              fullWidth
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
            <Button onClick={submitClose} color="primary" variant="contained">
              <SendOutlinedIcon />
              Send
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
    </div>
  );
}
