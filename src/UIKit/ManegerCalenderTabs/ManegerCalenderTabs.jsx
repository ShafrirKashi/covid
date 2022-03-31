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
  let todayday = getDayName(today, "he-IL");

  // Tomorrow //
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let tomorrowday = getDayName(tomorrow, "he-IL");

  // Three days //
  let three = new Date();
  three.setDate(three.getDate() + 2);
  let threeday = getDayName(three, "he-IL");

  // Four days //
  let four = new Date();
  four.setDate(four.getDate() + 3);
  let fourday = getDayName(four, "he-IL");

  // Five days //
  let five = new Date();
  five.setDate(five.getDate() + 4);
  let fiveday = getDayName(five, "he-IL");

  // Six days //
  let six = new Date();
  six.setDate(six.getDate() + 5);
  let sixday = getDayName(six, "he-IL")

  // Seven days //
  let seven = new Date();
  seven.setDate(seven.getDate() + 6);
  let sevenday = getDayName(seven, "he-IL");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
        <div className="calenderButtons">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <div className="day">
                <div className="dateName">{todayday}</div>
                <div className="date">{new Date().getDate()}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{tomorrowday}</div>
                <div className="date">{new Date().getDate() + 1}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{threeday}</div>
                <div className="date">{new Date().getDate() + 2}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{fourday}</div>
                <div className="date">{new Date().getDate() + 3}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{fiveday}</div>
                <div className="date">{new Date().getDate() + 4}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{sixday}</div>
                <div className="date">{new Date().getDate() + 5}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
          <Tab
            label={
              <div className="day">
                <div className="dateName">{sevenday}</div>
                <div className="date">{new Date().getDate() + 6}</div>
              </div>
            }
            {...a11yProps(0)}
          ></Tab>
        </Tabs>
        </div>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="patientList">
          <PatientsList/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="patientList">
          <PatientsList/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="patientList">
          <PatientsList/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="patientList">
          <PatientsList/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="patientList">
          <PatientsList/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className="patientList">
          <PatientsList/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className="patientList">
          <PatientsList/>
        </div>
      </TabPanel>
    </Box>
  );
}
