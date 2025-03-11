import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";

const CustomSelect = ({
  label,
  value,
  name,
  options,
  onChange,
  borderRadius = "10px",
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        sx={{ borderRadius }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
CustomSelect.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    borderRadius: PropTypes.string,
  };
export default CustomSelect;
