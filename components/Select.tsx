import Checkbox from "@mui/material/Checkbox";
import { Option } from "@/schema/options.schema";
import { TextField, Autocomplete } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const checkedIcon = <CheckBoxIcon fontSize="small" />;
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;

export default function Select({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  value: Option[];
  options: Option[];
  onChange: (value: Option[]) => void;
}) {
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      size="small"
      disabled={!options.length}
      value={value}
      options={options}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 4 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={`Filter by ${label}`}
          placeholder={`Select one or more ${label.toLowerCase()}`}
        />
      )}
      onChange={(_, value) => {
        onChange(value);
      }}
      style={{
        backgroundColor: "#fcfcfc",
      }}
    />
  );
}
