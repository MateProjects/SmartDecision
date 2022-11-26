import SvgIcon from "@mui/material/SvgIcon";

const PermIdentityIcon = ({ style = {}, ...props }) => (
  <SvgIcon
    viewBox="0 0 20 20"
    style={{ width: "20px", height: "20px", ...style }}
    {...props}
  >
    <path d="M9.99999 4.91671C10.9667 4.91671 11.75 5.70004 11.75 6.66671C11.75 7.63337 10.9667 8.41671 9.99999 8.41671C9.03333 8.41671 8.24999 7.63337 8.24999 6.66671C8.24999 5.70004 9.03333 4.91671 9.99999 4.91671ZM9.99999 12.4167C12.475 12.4167 15.0833 13.6334 15.0833 14.1667V15.0834H4.91666V14.1667C4.91666 13.6334 7.52499 12.4167 9.99999 12.4167ZM9.99999 3.33337C8.15833 3.33337 6.66666 4.82504 6.66666 6.66671C6.66666 8.50837 8.15833 10 9.99999 10C11.8417 10 13.3333 8.50837 13.3333 6.66671C13.3333 4.82504 11.8417 3.33337 9.99999 3.33337ZM9.99999 10.8334C7.77499 10.8334 3.33333 11.95 3.33333 14.1667V16.6667H16.6667V14.1667C16.6667 11.95 12.225 10.8334 9.99999 10.8334Z" />
  </SvgIcon>
);

export default PermIdentityIcon;
