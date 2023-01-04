import SimpleButton from "../../../conmponents/Bottons/SimpleButton/SimpleButton";

const HelpSideInfo = ({ classes, status = "" }) => {
  const subText =
    status === "welcome"
      ? "To keep connected with us please login with your personal info"
      : "Enter your personal detailsand start journey with us";
  return (
    <div className={classes.welcomeSide}>
      {status === "welcome" ? (
        <div>
          <p1>{"Welcome Back!"}</p1>
          <span>{subText}</span>
          <SimpleButton name="Sign In"/>
        </div>
      ) : (
        <div>
          <p1>{"Welcome Back!"}</p1>
          <span>{subText}</span>
          <SimpleButton name="Sign Up"/>
        </div>
      )}
    </div>
  );
};

export default HelpSideInfo;
