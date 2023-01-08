import React from "react";

import SocialButton from "../../conmponents/toggleForm/SocialButton";
import BrandButton from "../../conmponents/toggleForm/BrandButton";
import SlidingForm from "../../conmponents/toggleForm/SlidingForm";

const FormLogin = () => (
  <SlidingForm>
    <>
      <h1>Sign in</h1>
      <div>
        <SocialButton>
          {/* <FontAwesomeIcon icon={["fab", "facebook-f"]} /> */}
        </SocialButton>
        <SocialButton>
          {/* <FontAwesomeIcon icon={["fab", "linkedin-in"]} /> */}
        </SocialButton>
        <SocialButton>
          {/* <FontAwesomeIcon icon={["fab", "google"]} /> */}
        </SocialButton>
      </div>
      <p>or use your account</p>
      <form>
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="password" />
      </form>
      <p>
        <a href="#">Forgot your password?</a>
      </p>
      <BrandButton>Sign in</BrandButton>
    </>
  </SlidingForm>
);

export default FormLogin;
