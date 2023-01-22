import React from "react";
import * as Components from "../Components";
import SignIn from "../../../levels/signInSignUp/SignIn/SignIn";
import SignUp from "../../../levels/signInSignUp/SignUp/SignUp";
import Decorator from "../../../components/decorator/decorator";
import LogoIcon from "../../../image/icons/Logo";

const RegisterForm = () => {
  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <SignUp signinIn={signIn} />
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <SignIn signinIn={signIn} />
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Decorator />
            <Components.LogoContainer>
              <LogoIcon />
              <Components.LogoText component="h2" variant="body3">
                Rylex
              </Components.LogoText>
            </Components.LogoContainer>
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
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default RegisterForm;
