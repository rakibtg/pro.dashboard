import { Box, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import colors from "../utils/colors";
import TextLabel from "./TextLabel";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Sidebar() {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box
        flexGrow={1}
        marginBottom={1.5}
        padding={0.5}
        display="flex"
        flexDirection={"column"}
        gap={2.5}
      >
        <TextLabel>Filter Report Data</TextLabel>
        <Autocomplete
          multiple
          options={top100Films}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          size="small"
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
              label="Filter by Channels"
              placeholder="Select one or more channels"
            />
          )}
          style={{
            backgroundColor: "#fcfcfc",
          }}
        />

        <Autocomplete
          multiple
          options={top100Films}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          size="small"
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
              label="Filter by Channel Groups"
              placeholder="Select one or more channel groups"
            />
          )}
          style={{
            backgroundColor: "white",
          }}
        />

        <Autocomplete
          multiple
          options={top100Films}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          size="small"
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
              label="Filter by Campaigns"
              placeholder="Select one or more campaigns"
            />
          )}
          style={{
            backgroundColor: "white",
          }}
        />
      </Box>
    </Box>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
