import React from 'react';
import './SignUp.css'
import { GroupInputs } from '../../components/Inputs/GroupInputs/GroupInputs';
import Button from '@mui/material/Button';
import { ReactSVG } from 'react-svg';
import { formFields } from '../../components/Inputs/constants/constants';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <div className="signUp-page">
      <div className="signUp-page__signIn-link">
        <div className="signup-logo-block">
          <a href="/" className="logo-signup">
            <ReactSVG src={"./logo-main.svg"} className="logo-picture" />
            <p className="logo-text">Rylex</p>
          </a>
        </div>

        <div className="image-cube"></div>
        <div className="image-angle"></div>
        <div className="image-ellips"></div>

        <h1 className="signIn-page__title">Welcome Back!</h1>

        <p className="signIn-page__text">To keep connected with us please 
          <br/>
          login with your personal info
        </p>

        <Link to="/signIn" className="signIn-decoration">
          <Button
            className={"signIn-signup-page"}
          >
            Sign In
          </Button>
        </Link>
      </div>

      <div className="signUp-page__right-side">
        <div className="signUp-page__helper">
          <h2 className="signUp-page__article signUp-page__article--mgb">Create Account</h2>

          <div className="signUp-page__icons signUp-page__icons--mgb">
            <a href="/" className="signUp-page__facebook-icon">
              <ReactSVG
                src="./images/facebook.svg"
                alt="facebook"
                className="facebook-icon"
              />
            </a>
            <a href="/" className="mail-icon">
              <ReactSVG
                src="./images/googlePluse.svg"
              />
            </a>
          </div>

          <p className="signUp-page__text signUp-page__text--mgb">
            or use your email for registration
          </p>
        </div>

        <div className="signUp-page__group-items signUp-page__group-items--mgb">
          <GroupInputs fields={formFields} />
        </div>

      </div>

    </div>
  );
};
