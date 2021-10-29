import GuestLayout from "./components/GuestLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { LoginData } from "./login-data.dto";
import { authenticate } from "./login.service";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


function initLoginData(): LoginData {
  return {
    email: "",
    password: "",
  };
}

export default function Login() {
  const [loginData, setLoginData] = React.useState<LoginData>(initLoginData());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authenticate(loginData)
      .then(() => alert("Your login was successful"))
      .catch(() => alert("Unsuccessful login"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;

    function changeLoginData(data: LoginData) {
      return { ...data, [key]: e.target.value };
    }
    setLoginData(changeLoginData);
  };

  return (
    <GuestLayout title="Login">
      <form onSubmit={handleSubmit}>
        <div className="form-control"><Button variant="text" color="primary" startIcon={<ArrowBackIcon />} href="./home">Back</Button>
          <TextField
            required
            autoFocus
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={loginData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <TextField
            required
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <div className="button-panel">
            <Button variant="contained" type="submit" fullWidth>
              Login
            </Button>
            <h5>
              <Link to="/forgot">Forgot Password</Link>
            </h5>
        </div>
        <hr />
        <div className="Register">
          <h3>Haven't got an account yet?</h3>
            <Button variant="contained" color="success" href="./signup" fullWidth>
              Register Now
            </Button>
        </div>
      </form>
    </GuestLayout>
  );
}
