import { React, useState, useEffect } from "react";
import SignUp from "../signUp/signUp";
import SignIn from "../signIn/signIn";
import Grid from "@mui/material/Grid";
import Sidebar from "../sidebar/sidebar";

const Form = () => {
  const [initForm, setinitForm] = useState("");
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Sidebar setinitForm={setinitForm} />
      {initForm ? <SignUp /> : <SignIn />}
    </Grid>
  );
};

export default Form;
