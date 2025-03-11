import { Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { fontFamily } from "../../constants/fontFamily";


/**
 * HeadingForm - A reusable component for form labels and section headers
 * 
 * @param {Object} props
 * @param {string} props.text - The label text to display
 * @param {string} props.fontFamilyType - Font family to use from fontFamily constants
 * @param {number} props.fontSize - Font size in pixels
 * @param {number|string} props.fontWeight - Font weight
 * @param {string} props.color - Text color
 * @param {string} props.variant - MUI Typography variant
 * @param {Object} props.sx - Additional MUI sx props
 */
const HeadingForm = ({
  text = "Animal Names",
  fontFamilyType = "msr",
  fontSize = 16,
  fontWeight = 600,
  color = "initial",
  variant = "body1",
  sx = {},
}) => {
  return (
    <Typography
      variant={variant}
      color={color}
      fontFamily={fontFamily[fontFamilyType] || fontFamily.msr}
      fontWeight={fontWeight}
      fontSize={fontSize}
      sx={sx}
    >
      {text}
    </Typography>
  );
};

HeadingForm.propTypes = {
  /**
   * The label text to display
   */
  text: PropTypes.string,
  
  /**
   * Font family key from fontFamily constants
   */
  fontFamilyType: PropTypes.string,
  
  /**
   * Font size in pixels
   */
  fontSize: PropTypes.number,
  
  /**
   * Font weight
   */
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  
  /**
   * Text color
   */
  color: PropTypes.string,
  
  /**
   * MUI Typography variant
   */
  variant: PropTypes.string,
  
  /**
   * Additional MUI sx props
   */
  sx: PropTypes.object,
};

HeadingForm.defaultProps = {
  text: "Animal Names",
  fontFamilyType: "msr",
  fontSize: 16,
  fontWeight: 600,
  color: "initial",
  variant: "body1",
  sx: {},
};

export default HeadingForm;
