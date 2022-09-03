import React from "react";
import { useState } from "react";
import { FormControl, FormLabel } from "@mui/material/";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Radio } from "@mui/material";
import FirstTable from "./FirstTable";
import SecondTable from "./SecondTable";
import { Box } from "@mui/system";
export default function FamilyStatus() {
  const [value, setValue] = useState("single");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <Box>
      <FormControl>
        <FormLabel>מצב משפחתי</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="single" control={<Radio />} label="יחיד" />
          <FormControlLabel value="pair" control={<Radio />} label="זוג" />
        </RadioGroup>
      </FormControl>
      {value === "single" ? <FirstTable/> : <SecondTable/>}
    </Box>
  );
}
