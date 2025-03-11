import { IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { fontFamily } from "../../../constants/fontFamily";
import CloseIcon from "@mui/icons-material/Close";

/**
 * HeadingModal - A reusable heading component for modals
 *
 * @param {Object} props
 * @param {string} props.text - The heading text to display
 * @param {string} props.fontFamilyType - Font family to use from fontFamily constants
 * @param {number} props.fontSize - Font size in pixels
 * @param {number|string} props.fontWeight - Font weight
 * @param {string} props.color - Text color
 * @param {string} props.variant - MUI Typography variant
 * @param {Object} props.sx - Additional MUI sx props
 */
const HeadingModal = ({
  text = "Create new Animal Type",
  fontFamilyType = "msr",
  fontSize = 24,
  fontWeight = 600,
  color = "initial",
  variant = "body1",
  sx = {},
  onClose,
}) => {
  return (
    <div
      className="modal-header"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
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
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

HeadingModal.propTypes = {
  /**
   * The heading text to display
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

  onClose: PropTypes.func.isRequired,
};

HeadingModal.defaultProps = {
  text: "Create new Animal Type",
  fontFamilyType: "msr",
  fontSize: 24,
  fontWeight: 600,
  color: "initial",
  variant: "body1",
  sx: {},
};

export default HeadingModal;
