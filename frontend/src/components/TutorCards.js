import React from "react";
import "../index.scss";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function TutorCards() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar>
              <img
                className="avatar_pic"
                src="https://images.unsplash.com/photo-1557722808-868d2424c292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              />
            </Avatar>
          }
          title="Bella Sangwan"
          subheader="Math teacher"
        />
        <CardContent>
          <strong>Details:</strong>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive Teacher is a perfect blah to blah and teach Lorem
            <li>i hope no one reads this cause i can t think </li>
            <li>of anything to write as a placeholder hahahaha wagwan yo!</li>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
