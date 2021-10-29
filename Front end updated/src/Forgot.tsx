import React from "react";
import GuestLayout from "./components/GuestLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LoginData } from "./login-data.dto";
import axios from 'axios';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function initLoginData(): LoginData {
  return {
    email: "",
    password: "",
  };
}


export default function Forgot(){
  const [loginData, setLoginData] = React.useState<LoginData>(initLoginData());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('forgot').then(
      res => {
        console.log(res);
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const key = e.target.name;

  function changeLoginData(data: LoginData) {
    return ({ ...data,[key]: e.target.value });
  }
  setLoginData(changeLoginData);
};




return (
    <GuestLayout title="Reset Password">
      <form onSubmit={handleSubmit}>
      <div><Button variant="text" color="primary" startIcon={<ArrowBackIcon />} href="./login">Back</Button></div>
        <div className="form-control">
          <TextField
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="button-panel">
          <Button variant="contained" type="submit" fullWidth>
            Send Password Reset Link
          </Button>
        </div>
      </form>
    </GuestLayout>  
  );
}