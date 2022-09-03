import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Slider from '@mui/material/Slider';

export default function YearsOfSeniority() {
    const [value, setValue] = React.useState(12);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
      <Box sx={{ width: 300}} margin="auto">
        <Typography id="input-slider" align="center" gutterBottom variant="h6">
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
    )
}
