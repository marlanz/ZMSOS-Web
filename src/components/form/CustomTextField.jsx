import { TextField } from "@mui/material";
import PropTypes from 'prop-types';

/**
 * CustomTextField - A reusable styled text field component for forms
 * 
 * @param {Object} props
 * @param {string} props.id - Input ID
 * @param {string} props.name - Input name for form handling
 * @param {string} props.label - Label text for the field
 * @param {string} props.placeholder - Placeholder text
 * @param {string|number} props.value - Current input value
 * @param {Function} props.onChange - Change handler function
 * @param {boolean} props.fullWidth - Whether the field should take full width
 * @param {string} props.type - Input type (text, email, password, etc.)
 * @param {boolean} props.required - Whether the field is required
 * @param {boolean} props.disabled - Whether the field is disabled
 * @param {boolean} props.error - Whether the field has an error
 * @param {string} props.helperText - Helper or error text to display
 * @param {number} props.borderRadius - Border radius in pixels
 * @param {string} props.size - MUI size variant (small, medium)
 * @param {string} props.variant - MUI variant (outlined, filled, standard)
 * @param {Object} props.sx - Additional MUI sx props
 * @param {Object} props.InputProps - Props applied to the Input element
 */
const CustomTextField = ({
  id = "",
  name = "",
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  fullWidth = true,
  type = "text",
  required = false,
  disabled = false,
  error = false,
  helperText = "",
  borderRadius = 10,
  size = "medium",
  variant = "outlined",
  sx = {},
  InputProps = {},
  ...rest
}) => {
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      type={type}
      required={required}
      disabled={disabled}
      error={error}
      helperText={helperText}
      size={size}
      variant={variant}
      InputProps={{
        ...InputProps
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: `${borderRadius}px`,
        },
        ...sx
      }}
      {...rest}
    />
  );
};

CustomTextField.propTypes = {
  /**
   * Input ID
   */
  id: PropTypes.string,
  
  /**
   * Input name for form handling
   */
  name: PropTypes.string,
  
  /**
   * Label text for the field
   */
  label: PropTypes.string,
  
  /**
   * Placeholder text
   */
  placeholder: PropTypes.string,
  
  /**
   * Current input value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  
  /**
   * Change handler function
   */
  onChange: PropTypes.func,
  
  /**
   * Whether the field should take full width
   */
  fullWidth: PropTypes.bool,
  
  /**
   * Input type (text, email, password, etc.)
   */
  type: PropTypes.string,
  
  /**
   * Whether the field is required
   */
  required: PropTypes.bool,
  
  /**
   * Whether the field is disabled
   */
  disabled: PropTypes.bool,
  
  /**
   * Whether the field has an error
   */
  error: PropTypes.bool,
  
  /**
   * Helper or error text to display
   */
  helperText: PropTypes.string,
  
  /**
   * Border radius in pixels
   */
  borderRadius: PropTypes.number,
  
  /**
   * MUI size variant (small, medium)
   */
  size: PropTypes.oneOf(['small', 'medium']),
  
  /**
   * MUI variant (outlined, filled, standard)
   */
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  
  /**
   * Additional MUI sx props
   */
  sx: PropTypes.object,
  
  /**
   * Props applied to the Input element
   */
  InputProps: PropTypes.object,
};

CustomTextField.defaultProps = {
  id: "",
  name: "",
  label: "",
  placeholder: "",
  value: "",
  onChange: () => {},
  fullWidth: true,
  type: "text",
  required: false,
  disabled: false,
  error: false,
  helperText: "",
  borderRadius: 10,
  size: "medium",
  variant: "outlined",
  sx: {},
  InputProps: {},
};

export default CustomTextField;
