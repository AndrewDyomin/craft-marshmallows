"use client";

import { useState, useEffect } from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { signup } from "../actions/auth";
import { Formik, Form, Field } from "formik";

const customStyles = {
  content: {
    top: "50px",
    left: "auto",
    right: "40px",
    bottom: "auto",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  menuButton: {
    color: "black",
    background: "transparent",
    border: "none",
    width: "60px",
    height: "60px",
    cursor: "pointer",
  },
  closeButton: {
    marginLeft: "auto",
    width: "30px",
    height: "30px",
    background: "transparent",
    color: "#090909",
    border: "none",
  },
  authNav: {
    display: "grid",
    gap: "15px",
    fontSize: "16px",
  },

  authLink: {
    cursor: "pointer",
  },
};

const authModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "60%",
    minHeight: "30vw",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
  },
  form: {
    display: "grid",
    gap: "15px",
    padding: "20px",
  },
  input: {
    background: "#f8f8f8",
    color: "#333",
    border: "2px solid rgba(208, 95, 180, 0.7)",
    borderRadius: "8px",
    padding: "12px 16px",
    textAlign: "center",
    fontSize: "16px",
    transition: "0.3s ease-in-out",
    outline: "none",
  },
  button: {
    background:
      "linear-gradient(135deg, rgb(214, 163, 201), rgb(230, 155, 211))",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    outline: "none",
  },
};

export default function MenuButton() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalAuth, setModalAuth] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (modalIsOpen || modalAuth) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [modalIsOpen, modalAuth]);

  const registerHendler = () => {};
  const loginHendler = () => {};

  return (
    <>
      <button onClick={() => setIsOpen(true)} style={customStyles.menuButton}>
        <MenuIcon />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div style={customStyles.wrapper}>
          <button
            onClick={() => setIsOpen(false)}
            style={customStyles.closeButton}
          >
            <CloseIcon />
          </button>
          <nav>
            <ul style={customStyles.authNav}>
              <li
                style={customStyles.authLink}
                onClick={() => {
                  setIsOpen(false);
                  setModalAuth("login");
                }}
              >
                Увійти
              </li>
              <li
                style={customStyles.authLink}
                onClick={() => {
                  setIsOpen(false);
                  setModalAuth("register");
                }}
              >
                Реєстрація
              </li>
            </ul>
          </nav>
        </div>
      </Modal>
      <Modal // register - login modal
        isOpen={modalAuth}
        onRequestClose={() => setModalAuth(false)}
        style={authModalStyles}
        ariaHideApp={false}
      >
        {modalAuth === "register" ? (
          <Formik // registration form
            initialValues={{
              name: "",
              password: "",
              email: "",
            }}
            onSubmit={async (values, { resetForm }) => {
              try {
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("email", values.email);
                formData.append("password", values.password);
                await signup('',formData)
                resetForm();
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <Form style={authModalStyles.form}>
              <Field
                id="name"
                style={authModalStyles.input}
                name="name"
                placeholder="Jane"
                type="name"
              />
              <Field
                style={{
                  ...authModalStyles.input,
                  border: isFocused
                    ? "2px solid rgb(208, 95, 180)"
                    : "2px solid rgba(208, 95, 180, 0.6)",
                  boxShadow: isFocused
                    ? "0px 4px 10px rgba(208, 95, 180, 0.3)"
                    : "none",
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              <Field
                style={authModalStyles.input}
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />

              <button
                type="submit"
                style={{
                  ...authModalStyles.button,
                  background: isHovered
                    ? "linear-gradient(135deg, rgb(230, 155, 211), rgb(214, 163, 201))"
                    : "linear-gradient(135deg, rgb(214, 163, 201), rgb(230, 155, 211))",
                  boxShadow: isHovered
                    ? "0px 4px 10px rgba(230, 155, 211, 0.3)"
                    : "none",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Реєстрація
              </button>
            </Form>
          </Formik>
        ) : (
          <Formik // login form
            initialValues={{
              password: "",
              email: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form style={authModalStyles.form}>
              <Field
                style={{
                  ...authModalStyles.input,
                  border: isFocused
                    ? "2px solid rgb(208, 95, 180)"
                    : "2px solid rgba(208, 95, 180, 0.6)",
                  boxShadow: isFocused
                    ? "0px 4px 10px rgba(208, 95, 180, 0.3)"
                    : "none",
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              <Field
                style={authModalStyles.input}
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />

              <button
                type="submit"
                style={{
                  ...authModalStyles.button,
                  background: isHovered
                    ? "linear-gradient(135deg, rgb(230, 155, 211), rgb(214, 163, 201))"
                    : "linear-gradient(135deg, rgb(214, 163, 201), rgb(230, 155, 211))",
                  boxShadow: isHovered
                    ? "0px 4px 10px rgba(230, 155, 211, 0.3)"
                    : "none",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Увійти
              </button>
            </Form>
          </Formik>
        )}
      </Modal>
    </>
  );
}
