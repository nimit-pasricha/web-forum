import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import BadgerLoginStatusContext from "../contexts/BadgerLoginStatusContext";

function BadgerMessage(props) {
  const [loginStatus, setLoginStatus] = useContext(BadgerLoginStatusContext);

  const dt = new Date(props.created);

  return (
    <Card style={{ margin: "0.5rem", padding: "0.5rem" }}>
      <h2>{props.title}</h2>
      <sub>
        Posted on {dt.toLocaleDateString()} at {dt.toLocaleTimeString()}
      </sub>
      <br />
      <i>{props.poster}</i>
      <p>{props.content}</p>
      {loginStatus === props.poster && (
        <Button variant="danger" onClick={() => props.deletePost(props.id)}>
          Delete Post
        </Button>
      )}
    </Card>
  );
}

export default BadgerMessage;
