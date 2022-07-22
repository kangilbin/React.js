import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const TopBar = ({tab, setTab}) => {

  const handleChange = (event, newValue) => {
    setTab(newValue)
  }

  return (
    <Box sx={{ width: '100%', height: 80 }}>
      <Tabs
        value={tab}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value="prf" label="PROFILE" sx={{ width: '16%', height: 80 }} />
        <Tab value="all" label="ALL PROJECT" sx={{ width: '16%', height: 80 }} />
        <Tab value="work" label="WORK PROJECT" sx={{ width: '17%', height: 80 }} />
        <Tab value="team" label="TEAM PROJECT" sx={{ width: '17%', height: 80 }} />
        <Tab value="personal" label="PERSONAL PROJECT" sx={{ width: '17%', height: 80 }} />
        <Tab value="clone" label="CLONE CODING" sx={{ width: '17%', height: 80 }} />
      </Tabs>
    </Box>
  );
}
export default TopBar