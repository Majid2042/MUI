import GuestLayout from "./components/GuestLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { SignupData } from "./signup-data.dto";
import { authenticate } from "./signup.service";
import HomeIcon from "@mui/icons-material/Home";
import Grid from "@mui/material/Grid";

function initSignupData(): SignupData {
  return {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  };
}

export default function Signup() {
  const [signupData, setSignupData] = React.useState<SignupData>(initSignupData());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authenticate(signupData)
        .then(() => {
          alert('You have registered successfully');
        }).catch(() => alert('Registration Failed'));  
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;

    function changeSignupData(data: SignupData) {
      return ({ ...data, [key]: e.target.value });
    }
    setSignupData(changeSignupData);
  };

  return (
    <GuestLayout title="Sign Up">
      <form onSubmit={handleSubmit}>
      <div><Button variant="text" color="primary" startIcon={<HomeIcon />} href="./home">Home</Button></div>
        <Grid container spacing = {2}>
          <Grid item xs = {12} sm = {6}>
          <TextField
            required
            autoFocus
            name="firstName"
            type="text"
            label="First Name"
            variant="outlined"
            fullWidth
            value={signupData.firstName}
            onChange={handleChange}
          />
          </Grid>
          <Grid item xs = {12} sm = {6}>
           <TextField
            required
            name="lastName"
            type="text"
            label="Last Name"
            variant="outlined"
            fullWidth
            value={signupData.lastName}
            onChange={handleChange}
          />
          </Grid>
        </Grid>
      <div className="form-control">
          <TextField
            required
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={signupData.email}
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
            value={signupData.password}
            onChange={handleChange}
          />
      </div>
      <div className="form-control">
          <TextField
            required
            name="confirm_password"
            type="password"
            label="Confirm Password"
            variant="outlined"
            fullWidth
            value={signupData.confirm_password}
            onChange={handleChange}
          />
      </div>
      <br />
        <div className="button-panel">
          <Button variant="contained" type="submit" fullWidth>
            Register
          </Button>
        </div>
      </form>
    </GuestLayout>    
  );
}
