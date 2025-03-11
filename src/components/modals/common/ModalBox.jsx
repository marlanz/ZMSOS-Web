import { Box } from "@mui/material";
import PropTypes from 'prop-types';

/**
 * ModalBox - A reusable centered modal box component
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to render inside the box
 * @param {number|string} props.width - Width of the modal box
 * @param {string} props.bgcolor - Background color of the box
 * @param {number|string} props.padding - Padding inside the box
 * @param {number|string} props.borderRadius - Border radius of the box
 * @param {Object} props.sx - Additional MUI sx props
 */
const ModalBox = ({
  children,
  width = 700,
  bgcolor = "background.paper",
  padding = "30px",
  borderRadius = "10px",
  sx = {},
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width,
        bgcolor,
        p: padding,
        borderRadius,
        ...sx
      }}
    >
      {children}
    </Box>
  );
};

ModalBox.propTypes = {
  /**
   * Content to render inside the box
   */
  children: PropTypes.node,
  
  /**
   * Width of the modal box
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  
  /**
   * Background color of the box
   */
  bgcolor: PropTypes.string,
  
  /**
   * Padding inside the box
   */
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  
  /**
   * Border radius of the box
   */
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  
  /**
   * Additional MUI sx props
   */
  sx: PropTypes.object,
};

ModalBox.defaultProps = {
  width: 700,
  bgcolor: "background.paper",
  padding: "30px",
  borderRadius: "10px",
  sx: {},
};

export default ModalBox;
