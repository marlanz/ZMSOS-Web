import { Autocomplete, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";

/**
 * CustomAutocomplete - A flexible autocomplete component
 *
 * @param {Object} props
 * @param {Array} props.options - Array of options to display in the dropdown
 * @param {string} props.label - Label for the input field
 * @param {string} props.placeholder - Placeholder text for the input field
 * @param {string} props.optionLabelKey - Key in the option object to use as label (e.g., 'scientificName')
 * @param {number} props.width - Width of the component
 * @param {string} props.fontFamily - Font family for the dropdown options
 * @param {number} props.borderRadius - Border radius for the input field
 * @param {Function} props.onChange - Function to call when selection changes
 * @param {Object} props.textFieldProps - Additional props for TextField
 * @param {Object} props.autocompleteProps - Additional props for Autocomplete
 */
const CustomAutocomplete = ({
  options = [],
  label = "Type name",
  placeholder = "Search...",
  optionLabelKey = "scientificName",
  width = 500,
  fontFamily = "inherit",
  borderRadius = 10,
  onChange,
  textFieldProps = {},
  autocompleteProps = {},
}) => {
  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width }}
      getOptionLabel={(option) => option[optionLabelKey] || ""}
      onChange={onChange}
      renderOption={(props, option) => (
        <Typography
          variant="body1"
          color="initial"
          {...props}
          fontFamily={fontFamily}
        >
          {option[optionLabelKey] || ""}
        </Typography>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          {...textFieldProps}
          label={label}
          placeholder={placeholder}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: `${borderRadius}px`,
            },
            ...textFieldProps.sx,
          }}
        />
      )}
      {...autocompleteProps}
    />
  );
};

// PropTypes validation
CustomAutocomplete.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  optionLabelKey: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontFamily: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  textFieldProps: PropTypes.object,
  autocompleteProps: PropTypes.object,
};

// Default props
CustomAutocomplete.defaultProps = {
  options: [],
  label: "Type name",
  placeholder: "Search...",
  optionLabelKey: "scientificName",
  width: 500,
  fontFamily: "inherit",
  borderRadius: 10,
  textFieldProps: {},
  autocompleteProps: {},
};

export default CustomAutocomplete;
