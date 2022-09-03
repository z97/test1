import React from 'react'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function FamilyStatus() {
  return (
    <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="pair"
            name="radio-buttons-group"
          >
            <FormControlLabel value="pair" control={<Radio />} label="זוג" />
            <FormControlLabel value="male" control={<Radio />} label="יחיד" />
          </RadioGroup>
        </FormControl>
  )
}
