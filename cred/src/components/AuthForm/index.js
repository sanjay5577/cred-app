import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate, Link } from "react-router-dom";
import "./authForm.css";

const AuthForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    username: "", // Only for registration
    email: "",
    password: "",
    confirmPassword: "", // Only for registration
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const persistLogin = (token, username, userid) => {
    const loginInfo = {
      token: token,
      username: username,
      userid: userid,
    };
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
  };

  const login = async (loginData) => {
    try {
      const res = await axios.post('https://cred-backend-0j8t.onrender.com/v1/auth/login',loginData);
      console.log(res.data)
      if(res.status === 200){
      enqueueSnackbar("Logged in successfully", { variant: "success" });
      }
      persistLogin(res.data.tokens.access.token, res.data.user.name, res.data.user._id);
      navigate("/", { from: "login" });
    } catch (err) {
      console.log(err)
      if (err.response.status === 400) {
        enqueueSnackbar(`${err.response.data.message}`, { variant: "error" });
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          { variant: "error" },
        );
      }
    }
  };

  const register = async (registerData) => {
    try {
      const res = await axios.post('https://cred-backend-0j8t.onrender.com/v1/auth/register',registerData);
      if(res.status === 201){
      enqueueSnackbar("Registered Successfully", { variant: "success" });
      navigate("/login", { from: "register" });
      }
    } catch (err) {
      if (err.response.status === 400) {
        enqueueSnackbar(`${err.response.data.message}`, { variant: "error" });
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          { variant: "error" },
        );
      }
    }
  };

  const validateInput = (data) => {
    if (!isLogin && data.username.length === 0) {
      enqueueSnackbar("Username is a required field", { variant: "warning" });
      return false;
    } else if (!isLogin && data.username.length < 6) {
      enqueueSnackbar("Username must be at least 6 characters", {
        variant: "warning",
      });
      return false;
    } else if (data.password.length === 0) {
      enqueueSnackbar("Password is a required field", { variant: "warning" });
      return false;
    } else if (data.password.length < 6) {
      enqueueSnackbar("Password must be at least 6 characters", {
        variant: "warning",
      });
      return false;
    } else if (!isLogin && data.password !== data.confirmPassword) {
      enqueueSnackbar("Passwords do not match", { variant: "warning" });
      return false;
    } else return true;
  };

  const checkData = () => {
    setLoading(true);
    if (validateInput(formData)) {
      if (isLogin) {
        login({ email: formData.email, password: formData.password });
      } else {
        register({
          name: formData.username,
          email: formData.email,
          password: formData.password,
        });
      }
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkData();
  };

  return (
    <div className="auth-container max-width">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2 className="form-title">{isLogin ? "Login" : "Register"}</h2>

        {!isLogin && (
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required={!isLogin}
              className="form-input"
            />
          </div>
        )}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        )}
        {loading ? (
          <CircularProgress />
        ) : (
          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        )}

        <p className="secondary-action">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <Link className="link" to="/register">
                Register here
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link className="link" to="/login">
                Login here
              </Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
