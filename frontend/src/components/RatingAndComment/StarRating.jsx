import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { Box, Typography } from "@material-ui/core";

export default function StarRating() {
  const [value, setValue] = useState(null);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="rating"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}

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
