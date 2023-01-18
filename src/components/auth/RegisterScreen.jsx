import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startRegisterWithEmailPassword } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Alejandro",
    email: "avs@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    const { isValid, msg } = isFormValid();
    if (isValid) {
      dispatch(removeError());
      dispatch(startRegisterWithEmailPassword(email, password, name));
    } else {
      dispatch(setError(msg));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      return { isValid: false, msg: "Name is required" };
    } else if (!validator.isEmail(email)) {
      return { isValid: false, msg: "Email is not valid" };
    } else if (password !== password2 || password.length < 5) {
      return {
        isValid: false,
        msg: "Passwords should be at least 6 characters and match each other",
      };
    }
    return { isValid: true, msg: "" };
  };

  return (
    <div>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          autoComplete="off"
          name="name"
          value={name || ""}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          autoComplete="off"
          name="email"
          value={email || ""}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password || ""}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2 || ""}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to="/auth/login">
          Already register?
        </Link>
      </form>
    </div>
  );
};
