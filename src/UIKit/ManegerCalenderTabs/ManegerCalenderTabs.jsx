import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PatientsList from '../../UIKit/PatientsList/PatientsList'
import "./ManegerCalenderTabs.css";
import patients from "../../APIcalls/Patients.json";

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

export default function ManegerCalenderTabs() {
  const [value, setValue] = React.useState(0);

  let date =
    new Date().getDate() +
    "-" +
    parseInt(new Date().getMonth() + 1) +
    "-" +
    new Date().getFullYear();

  // const [date, setDate] = useState("")

  function getDayName(dateStr, locale) {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "short" });
  }
  // Today //
  let today = new Date();
  today.setDate(today.getDate() + 0);
  let todayday = getDayName(today, "he-IL").split(" ");

  // Tomorrow //
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let tomorrowday = getDayName(tomorrow, "he-IL").split(" ");

  // Three days //
  let three = new Date();
  three.setDate(three.getDate() + 2);
  let threeday = getDayName(three, "he-IL").split(" ");

  // Four days //
  let four = new Date();
  four.setDate(four.getDate() + 3);
  let fourday = getDayName(four, "he-IL").split(" ");

  // Five days //
  let five = new Date();
  five.setDate(five.getDate() + 4);
  let fiveday = getDayName(five, "he-IL").split(" ");

  // Six days //
  let six = new Date();
  six.setDate(six.getDate() + 5);
  let sixday = getDayName(six, "he-IL").split(" ");

  // Seven days //
  let seven = new Date();
  seven.setDate(seven.getDate() + 6);
  let sevenday = getDayName(seven, "he-IL").split(" ");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <div className="day">
                <div className="dateName">{todayday[0]}</div>
                <div className="date">{new Date().getDate()}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{tomorrowday[1]}</div>
                <div className="date">{new Date().getDate() + 1}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{threeday[1]}</div>
                <div className="date">{new Date().getDate() + 2}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{fourday[1]}</div>
                <div className="date">{new Date().getDate() + 3}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{fiveday[1]}</div>
                <div className="date">{new Date().getDate() + 4}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{sixday[1]}</div>
                <div className="date">{new Date().getDate() + 5}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{sevenday[1]}</div>
                <div className="date">{new Date().getDate() + 6}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="patientList">
          {/* {patients.map((patient) => (
            <div className="patientLine">
              <div className="patientName">{patient.full_name}</div>
              <div className="patientTestType">{patient.test_type}</div>
              <div className="patientTime"> {patient.time}</div>
            </div>
          ))} */}
          <PatientsList/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item 5
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item 6
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item 7
      </TabPanel>
    </Box>
  );
}
