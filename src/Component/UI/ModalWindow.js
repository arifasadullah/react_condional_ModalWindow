import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ModalWindow.module.css";
import gif from "../../assets/gif.gif";
import graph from "../../assets/graph.jpg";
import { useSelector, useDispatch } from "react-redux";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const show = useSelector((state) => state.show);
  const showGraph = useSelector((state) => state.showGraph);
  const dispatch = useDispatch();
  const gifHandler = () => {
    dispatch({ type: "SHOW_GIF" });
    setTimeout(() => {
      dispatch({ type: "CLOSE_GIF" });
    }, 7000);
  };

  const graphHandler = () => {
    dispatch({ type: "SHOW_GRAPH" });
  };
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        {show ? (
          <img
            className={classes.modalImage}
            src={showGraph ? graph : gif}
            alt="modal_image"
          />
        ) : (
          <img
            className={classes.modalImage}
            src={props.image}
            alt="modal_image"
          />
        )}
      </div>
      <footer className={classes.actions}>
        <Button onClick={gifHandler}>Show Gif</Button>
        <Button onClick={graphHandler}>Show Graph</Button>
      </footer>
    </Card>
  );
};

const ModalWindow = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          image={props.image}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ModalWindow;
