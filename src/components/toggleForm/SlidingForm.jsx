import posed from "react-pose";
import { transition } from "../../conmponents/toggleForm/StyledOverlay";

export default posed.div({
  signup: {
    transition,
    x: (props) => (props.signup ? "0%" : "100%"),
  },
  login: {
    transition,
    x: (props) => (props.signup ? " -100%" : "0%"),
  },
});
