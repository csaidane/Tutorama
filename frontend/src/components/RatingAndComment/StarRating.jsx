// import React, { useState } from "react";
// import Rating from "@material-ui/lab/Rating";
// import { Box, Typography } from "@material-ui/core";

// export default function StarRating() {
//   const [value, setValue] = useState(null);

//   return (
//     <div>
//       <Box component="fieldset" mb={3} borderColor="transparent">
//         <Rating
//           name="rating"
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         />
//       </Box>
//     </div>
//   );
// }

/*
import React, { useState } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./StarRating.scss";

export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              value={ratingValue}
              name="ratings"
              onCLick={() => setRating(ratingValue)}
            />
            <StarBorderIcon
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? "yellow" : "gray"}
            />
          </label>
        );
      })}
      <p>The rating is {rating}</p>
    </div>
  );
}
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

export default function StarRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
}
