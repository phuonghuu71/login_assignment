import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { motion } from "framer-motion";

import "./styles.scss";

function Profile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email.replace(/['"]+/g, ""));
    }

    const dob = localStorage.getItem("dob");
    if (dob) {
      setDob(dob.replace(/['"]+/g, ""));
    }

    const name = localStorage.getItem("name");
    if (name) {
      setName(name.replace(/['"]+/g, ""));
    }

    const phone = localStorage.getItem("phone");
    if (phone) {
      setPhone(phone.replace(/['"]+/g, ""));
    }
  }, []);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone) => {
    return String(phone)
      .toLowerCase()
      .match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
  };

  const cancel = () => {
    navigate("/");
  };

  const updateProfile = () => {
    if (name === "" || dob === "" || email === "" || phone === "") {
      toast.error("Missing input!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!validateEmail(email)) {
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
    } else if (!validatePhone(phone)) {
      toast.error("Phone is invalid!", {
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
      localStorage.setItem("name", name);
      localStorage.setItem("dob", dob);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);

      toast.success("Update successfully!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
        <div className="container__title align-left">
          <h5>Profile</h5>
        </div>

        <Input
          title="Full name:"
          label="fullname"
          handleOnChange={(e) => setName(e.target.value)}
          defaultValue={name}
        />

        <Input
          title="Day of Birth:"
          label="dob"
          handleOnChange={(e) => setDob(e.target.value)}
          defaultValue={dob}
        />

        <Input
          title="Email:"
          label="email"
          handleOnChange={(e) => setEmail(e.target.value)}
          defaultValue={email}
        />

        <Input
          title="Phone:"
          label="phone"
          handleOnChange={(e) => setPhone(e.target.value)}
          defaultValue={phone}
        />

        <div className="container__submit container__submit--right-align">
          <Button
            customStyle="primary"
            title="Update"
            handleClick={updateProfile}
          />

          <Button customStyle="secondary" title="Cancel" handleClick={cancel} />
        </div>
      </motion.div>

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

export default Profile;
