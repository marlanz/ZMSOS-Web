import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { fontFamily } from "../../constants/fontFamily";

const Heading = ({
  text,
  variant = "body1",
  color = "initial",
  size = 22,
  weight = 600,
  align = "left",
  customStyle,
  children,
  ...rest
}) => {
  return (
    <Typography
      variant={variant}
      color={color}
      fontSize={size}
      fontFamily={fontFamily.msr}
      fontWeight={weight}
      textAlign={align}
      style={customStyle}
      {...rest}
    >
      {text || children}
    </Typography>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.number,
  align: PropTypes.string,
  customStyle: PropTypes.object,
  children: PropTypes.node,
};

export default Heading;
