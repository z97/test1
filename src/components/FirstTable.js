import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

export default function FirstTable() {
  const [value, setValue] = React.useState(12);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [valueGender, setValueGender] = useState("men");
  const handleChangeGender = (event) => {
    setValueGender(event.target.value);
  };
  const [yearsAfterRetirementAge, setYearsAfterRetirementAge] = useState(0);
  const handleChangeYearsAfterRetirementAge = (event) => {
    setYearsAfterRetirementAge(event.target.value);
  };
  const [salary, setSalary] = useState(0);
  const handleChangeSalary = (event) => {
    setSalary(event.target.value);
  };

  function countBase() {
    return Math.round(
      value * 0.02 * 1596 +
        1596 +
        (value * 0.02 * 1596 + 1596) * 0.05 * yearsAfterRetirementAge
    );
  }
  function countPart() {
    return Math.round(countBase() - (salary - 6749) * 0.4);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          justifyContent: "center",
        },
      }}
    >
      <FormControl>
        <FormLabel>מין</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={valueGender}
          onChange={handleChangeGender}
        >
          <FormControlLabel value="men" control={<Radio />} label="גבר" />
          <FormControlLabel value="women" control={<Radio />} label="אישה" />
        </RadioGroup>
      </FormControl>

      <Box sx={{ width: 300 }} margin="auto">
        <Typography
          id="input-slider"
          align="center"
          gutterBottom
          variant="h6"
          paddingBottom={"1em"}
        >
          שנות הוותק
        </Typography>
        <Slider
          aria-label="Always visible"
          defaultValue={12}
          min={12}
          max={25}
          step={1}
          valueLabelDisplay="on"
          value={value}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ width: 300 }} margin="auto">
        <Typography
          id="input-slider"
          align="center"
          gutterBottom
          variant="h6"
          paddingBottom={"1em"}
        >
          כמה שנים מוכן לעבוד אחרי גיל פרישה?
        </Typography>
        <Slider
          aria-label="Always visible"
          defaultValue={0}
          min={0}
          max={valueGender === "men" ? 3 : 7.6}
          step={1}
          valueLabelDisplay="on"
          value={yearsAfterRetirementAge}
          onChange={handleChangeYearsAfterRetirementAge}
        />
      </Box>
      <Box sx={{ width: 300 }} margin="auto">
        <Typography
          id="input-slider"
          align="center"
          gutterBottom
          variant="h6"
          paddingBottom={"1em"}
        >
          משכורת
        </Typography>
        <Slider
          aria-label="Always visible"
          defaultValue={0}
          min={6749}
          max={10472}
          step={1}
          valueLabelDisplay="on"
          value={salary}
          onChange={handleChangeSalary}
        />
      </Box>
      <hr></hr>
      <Typography
        variant="h5"
        align="right"
        display={salary > 6749 ? "none" : "show"}
      >
         עד 6749 ש''ח - זכאי לקצבת אזרח ותיק מלאה:  
        <Typography variant="span" color={"green"} align="right">
          {" "}{countBase()}{" "}{"ש''ח"}
        </Typography>
      </Typography>
      <Typography
        variant="h5"
        align="right"
        display={salary <= 6749 || salary >= 10472 ? "none" : "show"}
      >
        זכאי לקצבת אזרח ותיק חלקית:
        <Typography variant="span" color={"green"} align="right">
        {" "}{countPart()}{" "}{"ש''ח"}
        </Typography>
      </Typography>
      <Typography
        variant="h5"
        align="right"
        display={salary >= 10472 ? "show" : "none"}
      >
        מעל 10472 ש''ח לא זכאי כעת, יקבל בגיל זכאות:
        <Typography variant="span" color={"green"} align="right">
        {" "}{countBase()}{" "}{"ש''ח"}
        </Typography>
      </Typography>
    </Box>
  );
}
