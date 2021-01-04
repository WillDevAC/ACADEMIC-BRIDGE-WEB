import React, { useState } from "react";

import { useUserSaved } from "../../context/contextAuth";
import { useLoading } from "../../context/contextMain";
import "./styles.css";
import api from "../../service/api";
import { useToasts } from "react-toast-notifications";
const Logo = require("../../assets/logo.png");

interface Props {}
const Login: React.FC<Props> = () => {
  const { setUserSaved } = useUserSaved();
  const { setLoading } = useLoading();
  const { addToast } = useToasts();
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const LoginUser = (e: any) => {
    e.preventDefault();
    api
      .post("/users/login", {
        email: emailInput,
        password: passwordInput,
      })
      .then((res) => {
        if (res.data.message === "success") {
          return navigateToHome(res.data.token, res.data.data.name);
        }
        return addToast(res.data.res, {
          appearance: "info",
          autoDismiss: true,
        });
      })
      .catch((res) => {
        return addToast(`${res.data.res}`, {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };

  const navigateToHome = (token: string, username: string) => {
    setLoading(true);
    localStorage.setItem("emailUser", String(String(emailInput).toLowerCase()));
    localStorage.setItem("nameUser", String(String(username).toLowerCase()));
    localStorage.setItem("userSaved", "true");
    localStorage.setItem("token", String(token));
    setUserSaved(true);

    return reloads();
  };

  const reloads = () => {
    return window.location.reload();
  };

  return (
    <div className="container">
      <div className="col-lg-4 col-md-3 col-sm-2"></div>
      <div className="col-lg-4 col-md-6 col-sm-8">
        <div className="logo">
          <img src={Logo} alt="Logo Academic-Bridge" />
        </div>
        <div className="row loginbox">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <input
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="col-lg-12  col-md-12 col-sm-12">
            <input
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="form-control"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="col-lg-12  col-md-12 col-sm-12">
            <span onClick={(e) => LoginUser(e)} className="btn  submitButton">
              Submit{" "}
            </span>
          </div>
        </div>
        <div className="row forGotPassword"></div>
        <br />
        <br />
        <footer className="footer">
          <span>Support</span> |
          <span>Developers</span> |
          <span>Contact us</span> |
          <span>Feedback</span>
          <p>©2020 Academic-Bridge </p>
        </footer>
      </div>
      <div className="col-lg-4 col-md-3 col-sm-2"></div>
    </div>
  );
};
export default Login;
