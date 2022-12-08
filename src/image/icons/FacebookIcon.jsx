import SvgIcon from "@mui/material/SvgIcon";

const FacebookIcon = ({ style = {}, ...props }) => (
  <SvgIcon
    viewBox="0 0 23 16"
    style={{ width: "24px", height: "20px", ...style }}
    {...props}
  >
    <path d="M6.25 6.875V4.375C6.25 3.685 6.81 3.125 7.5 3.125H8.75V0H6.25C4.17875 0 2.5 1.67875 2.5 3.75V6.875H0V10H2.5V20H6.25V10H8.75L10 6.875H6.25Z" />
  </SvgIcon>
);

export default FacebookIcon;
