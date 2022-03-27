import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Staff from "../../Pages/Staff/Staff";
import Table from "../../UIKit/Table/Table";

import ManegerCalenderTabs from "../../UIKit/ManegerCalenderTabs/ManegerCalenderTabs";
import "./ManagerIconTabs.css";
import moment from "moment";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const NewDate = moment().format("DD/MM/yyyy");

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          height: "93vh",
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabPanel value={value} index={0}>
          Item 1
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Table />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Dashboard />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Staff />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="ManagerCalenderMain">
            <span className="futureTestsSpan">דף בדיקות עתידיות</span>
            <span>{NewDate}</span>
            <div className="ManegerCalenderTabs">
              <ManegerCalenderTabs />
            </div>
          </div>
        </TabPanel>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab icon={<FactCheckOutlinedIcon />} {...a11yProps(2)} />

          <Tab icon={<Inventory2OutlinedIcon />} {...a11yProps(0)} />
          <Tab icon={<DashboardIcon />} {...a11yProps(3)} />
          <Tab icon={<PeopleIcon />} {...a11yProps(1)} />
          <Tab icon={<CalendarTodayIcon />} {...a11yProps(4)} />
        </Tabs>
      </Box>
    </Box>
  );
}
