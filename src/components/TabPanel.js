import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FirstTable from './FirstTable';
import SecondTable from './SecondTable';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="יחיד" value="1" style={{fontSize: "20px"}} />
            <Tab label="זוג" value="2" style={{fontSize: "20px"}}/>
          </TabList>
        </Box>
        <TabPanel value="1"><FirstTable/></TabPanel>
        <TabPanel value="2"><SecondTable/></TabPanel>
      </TabContext>
    </Box>
  );
}