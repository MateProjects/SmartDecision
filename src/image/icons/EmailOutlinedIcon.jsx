import SvgIcon from "@mui/material/SvgIcon";

const EmailOutlinedIcon = ({ style = {}, ...props }) => (
  <SvgIcon
    viewBox="0 0 20 20"
    style={{ width: "20px", height: "20px", ...style }}
    {...props}
  >
    <path d="M16.6667 3.33337H3.33334C2.41667 3.33337 1.67501 4.08337 1.67501 5.00004L1.66667 15C1.66667 15.9167 2.41667 16.6667 3.33334 16.6667H16.6667C17.5833 16.6667 18.3333 15.9167 18.3333 15V5.00004C18.3333 4.08337 17.5833 3.33337 16.6667 3.33337ZM16.6667 15H3.33334V6.66671L10 10.8334L16.6667 6.66671V15ZM10 9.16671L3.33334 5.00004H16.6667L10 9.16671Z" />
  </SvgIcon>
);

export default EmailOutlinedIcon;
