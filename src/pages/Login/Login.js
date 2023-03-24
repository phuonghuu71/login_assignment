import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineCheckCircle } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";

import CheckBox from "../../components/CheckBox/CheckBox";
import Input from "../../components/Input/Input";
import Modal from "../../components/Modal/Modal";

import { motion } from "framer-motion";

import "./styles.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const modalRef = useRef();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const close = () => {
    modalRef.current.close();

    setTimeout(() => {
      navigate("/profile");
    }, 500);
  };

  const handleSignIn = () => {
    if (!validateEmail(email)) {
      toast.error("Email is invalid!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      localStorage.setItem("email", JSON.stringify(email));

      modalRef.current.open();
    }
  };

  return (
    <motion.div
      className="background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="container"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container__title">
          <h5 className="">Login</h5>
        </div>

        <Input
          title="Email:"
          label="email"
          placeholder="example@kyanon.digital"
          titleColor="primary"
          handleOnChange={(e) => setEmail(e.target.value)}
        />

        <Input
          title="Password:"
          label="password"
          placeholder="******"
          titleColor="primary"
          type={showPassword ? "text" : "password"}
        />

        <div className="container__submit">
          <CheckBox
            title="Show pasword"
            label="showpassword"
            handleOnClick={() => setShowPassword(!showPassword)}
          />

          <div className="button__primary">
            <button onClick={handleSignIn}>Sign in</button>
          </div>
        </div>
      </motion.div>
      <Modal ref={modalRef} handleClose={close}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <AiOutlineCheckCircle
            style={{ fontSize: "64px", fontWeight: 400, color: "#55ae57" }}
          />
          <h4>Sign In Successfully</h4>
        </div>
      </Modal>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </motion.div>
  );
}

export default Login;
