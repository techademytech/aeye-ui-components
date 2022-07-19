import MuiButton from "@mui/material/Button";

const Button = (props) => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};

Button.propTypes = { ...MuiButton.propTypes };

export default Button;
