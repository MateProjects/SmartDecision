import React from "react";
import * as Components from "../Components";
import SignIn from "../../../levels/signInSignUp/SignIn/SignIn";
import SignUp from "../../../levels/signInSignUp/SignUp/SignUp";
import Decorator from "../../../conmponents/decorator/decorator";

// import FormLogin from "../../../conmponents/toggleForm/FormLogin";
// import FormSignup from "../../../conmponents/toggleForm/FormSignup";
// import Overlay from "../../../conmponents/toggleForm/Overlay";

// import Container from "../../../conmponents/toggleForm/Container";

// import useToggle, {
//   STATE_LOG_IN,
// } from "../../../conmponents/toggleForm/useToggle";

const RegisterForm = () => {
  // const [mode, toggleMode] = useToggle(initialState);

  // return (
  //   <Container pose={mode === STATE_LOG_IN ? "signup" : "login"}>
  //     <div className="container__form container__form--one">
  //       <FormLogin mode={mode} />
  //     </div>
  //     <div className="container__form container__form--two">
  //       <FormSignup mode={mode} />
  //     </div>
  //     <Overlay toggleMode={toggleMode} mode={mode} />
  //   </Container>
  // );
  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <SignUp />
        {/* <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form> */}
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <SignIn />
        {/* <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sigin In</Components.Button>
        </Components.Form> */}
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Decorator />
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Decorator />
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
          {/* </Decorator> */}
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default RegisterForm;
