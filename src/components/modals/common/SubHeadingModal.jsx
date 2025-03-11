import { Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { fontFamily } from "../../../constants/fontFamily";

/**
 * SubHeading - A reusable component for descriptive text
 * 
 * @param {Object} props
 * @param {string} props.text - The description text to display
 * @param {string} props.fontFamilyType - Font family to use from fontFamily constants
 * @param {number} props.fontSize - Font size in pixels
 * @param {string} props.color - Text color
 * @param {string} props.variant - MUI Typography variant
 * @param {Object} props.sx - Additional MUI sx props
 */
const SubHeadingModal = ({
  text = "Provide the necessary details for the new type. Ensure accuracy to maintain consistency.",
  fontFamilyType = "msr",
  fontSize = 14,
  color = "#667479",
  variant = "body1",
  sx = {},
}) => {
  return (
    <Typography
      variant={variant}
      fontFamily={fontFamily[fontFamilyType] || fontFamily.msr}
      color={color}
      fontSize={fontSize}
      sx={sx}
    >
      {text}
    </Typography>
  );
};

SubHeadingModal.propTypes = {
  /**
   * The description text to display
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

SubHeadingModal.defaultProps = {
  text: "Provide the necessary details for the new type. Ensure accuracy to maintain consistency.",
  fontFamilyType: "msr",
  fontSize: 14,
  color: "#667479",
  variant: "body1",
  sx: {},
};

export default SubHeadingModal;
