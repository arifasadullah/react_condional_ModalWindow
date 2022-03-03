import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import Button from "./UI/Button";
import classes from "../Component/LandingPage.module.css";
import ModalWindow from "./UI/ModalWindow";
import { useSelector, useDispatch } from "react-redux";

const LandingPage = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const modalHandler = () => {
    dispatch({ type: "CLICK_ME" });
  };
  const errorHandler = () => {
    dispatch({ type: "CLOSE_WINDOW" });
  };
  return (
    <div className={classes.container}>
      {modal && (
        <ModalWindow
          title={"Modal Window"}
          image={HeroImage}
          onConfirm={errorHandler}
        />
      )}
      <img src={HeroImage} alt="Landing_Image" />
      <Button onClick={modalHandler}>Click Me</Button>
    </div>
  );
};

export default LandingPage;
