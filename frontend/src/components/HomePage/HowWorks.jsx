import React from "react";
import "./HowWorks.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { makeStyles, Box, Grid, Typography } from "@material-ui/core/";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: true,
};

const steps = [
  {
    name: "step1",
    url:
      "https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/login.png?raw=true",
    description: "Step 1: Login or Sign up",
  },
  {
    name: "step2",
    url:
      "https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/search.png?raw=true",
    description: "Step 2: Search for a tutor",
  },
  {
    name: "step3",
    url:
      "https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/profile.png?raw=true",
    description: "Step 3: Review tutors' profiles",
  },
  {
    name: "step4",
    url:
      "https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/message.png?raw=true",
    description: "Step 4: Message the preferred tutor",
  },
  {
    name: "step5",
    url:
      "https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/lesson.png?raw=true",
    description: "Step 5: Get one-on-one lesson",
  },
  {
    name: "step6",
    url:
      "https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/pay.png?raw=true",
    description: "Step 6: Pay for the service",
  },
  {
    name: "step7",
    url:
      "https://github.com/csaidane/Tutorama/blob/component/navbar/frontend/src/img/rate.png?raw=true",
    description: "Step 7: Leave a feedback",
  },
];

const useStyles = makeStyles((theme) => ({
  backgroundColour: {
    backgroundImage:
      "linear-gradient(rgba(238,174,202,1) 0%, rgba(72,209,204,1) 90%)",
    boxShadow: "12px 12px 10px 19px white  ",
    height: "800px",
  },
  root: {
    maxWidth: 45,
  },
  media: {
    height: 140,
  },

  avatar: {
    margin: theme.spacing(1),
  },

  imgSize: {
    marginTop: "5%",
    marginBottom: "5%",
    width: "150px",
    height: "150px",
    borderRadius: "4%",
    "&:hover": {
      border: "",
      boxShadow: "4px 4px 4px 4px grey ",
    },
  },
}));

export default function HowWorks() {
  const classes = useStyles();
  return (
    <div className={classes.backgroundColour}>
      <h2 id="heading"> How tutorama works?</h2>
      <div id="slider">
        <Slider {...settings}>
          {steps.map((step) => {
            return (
              <div>
                <img
                  id="sliderPic"
                  // width="300px"
                  // height="300px"
                  src={step.url}
                ></img>
                <p className="stepText">{step.description}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
