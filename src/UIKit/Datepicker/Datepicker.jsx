import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import he from "date-fns/locale/he";
registerLocale("he", he);

const Datepicker = ({ label,onInput }) => {
  const [startDate, setStartDate] = useState(new Date('January 1, 90'));
  return (
    <div className="Input">
      <label className="labelDark">תאריך לידה</label>
      <DatePicker
        locale="he"
        selected={startDate}
        onChange={(date) => {
          setStartDate(date),
          onInput
        }}
        dateFormat="dd/MM/yyyy"
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        maxDate={new Date()}
        minDate={new Date('January 1, 1910')}
      />
    </div>
  );
};
export default Datepicker;
