import React from "react";

import SocialButton from "../../conmponents/toggleForm/SocialButton";
import BrandButton from "../../conmponents/toggleForm/BrandButton";
import SlidingForm from "../../conmponents/toggleForm/SlidingForm";

const FormSignup = () => (
  <SlidingForm signup>
    <h1>Create Account</h1>
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
    <p>or register with your email</p>
    <form>
      <input placeholder="Name" type="text" />
      <input placeholder="Email" type="text" />
      <input placeholder="Password" type="password" />
    </form>
    <BrandButton>Sign up</BrandButton>
  </SlidingForm>
);

export default FormSignup;
