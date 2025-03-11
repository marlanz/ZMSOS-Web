import { Button } from "@mui/material";
import PropTypes from "prop-types";

const CustomButton = ({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  onClick,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  type = "button",
  filter = false,
  customStyle,
  ...rest
}) => {
  const defaultStyles = {
    fontSize: 15,
    textTransform: "none",
    borderRadius: "8px",
    fontWeight: 600,
    padding: "12px 20px",
  };

  const buttonStyles = {
    ...defaultStyles,
    ...(variant === "contained" && {
      color: "white",
      backgroundColor: "#01008A",
      "&:hover": {
        backgroundColor: "#000066",
      },
    }),
    ...(filter === true && {
      color: "#01008A",
      border: "1px solid #01008A",
      padding: "12px 20px",
    }),
    ...customStyle,
  };

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      sx={buttonStyles}
      filter={filter}
      {...rest}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  customStyle: PropTypes.object,
  filter: PropTypes.bool,
};

export default CustomButton;
