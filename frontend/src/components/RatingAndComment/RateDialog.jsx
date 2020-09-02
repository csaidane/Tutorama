import React from "react";
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
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
    </div>
  );
}

// variant 2

// import React from "react";
// import { makeStyles, Grid, Paper, TextField, Divider } from "@material-ui/core";
// import Rating from "@material-ui/lab/Rating";
// import Box from "@material-ui/core/Box";

// const labels = {
//   0.5: "Useless",
//   1: "Useless+",
//   1.5: "Poor",
//   2: "Poor+",
//   2.5: "Ok",
//   3: "Ok+",
//   3.5: "Good",
//   4: "Good+",
//   4.5: "Excellent",
//   5: "Excellent+",
// };

// const useStyles = makeStyles({
//   root: {
//     // width: 100,
//     // justifyContent: "center",
//     display: "flex",
//     // marginTop: "20%",
//     // alignItems: "center"
//   },
//   window: {
//     width: "400px",
//     heigth: "400px",
//     // border: "1px solid black",
//   },
// });

// export default function RateDialog() {
//   // stars state
//   const [value, setValue] = React.useState(3);
//   const [hover, setHover] = React.useState(-1);
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <form>
//         <Grid
//           className={classes.window}
//           container
//           direction="column"
//           justify="center"
//           alignItems="center"
//         >
//           <Rating
//             name="hover-feedback"
//             value={value}
//             precision={0.5}
//             onChange={(event, newValue) => {
//               setValue(newValue);
//             }}
//             onChangeActive={(event, newHover) => {
//               setHover(newHover);
//             }}
//           />
//           {value !== null && (
//             <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
//           )}
//           <Divider light />
//           <Grid item xs={12}>
//             <TextField
//               variant="outlined"
//               rows={4}
//               required
//               fullWidth
//               multiline
//               name="comment"
//               label="Comment"
//               type="text"
//               helperText="Provide your feedback above"
//               id="bio"
//               // value={comment}
//               // onChange={(e) => setComment(e.target.value)}
//             />
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
// }
