import React, {useState} from 'react'
import './Calender.css'

function Calender() {

let date=new Date().getDate() + "-"+ parseInt(new Date().getMonth()+1) +"-"+new Date().getFullYear();

// const [date, setDate] = useState("")

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = new Date() ;
var day = getDayName(dateStr, "il-IL"); // Gives back 'Vrijdag' which is Dutch for Friday.
console.log(day);
  return (
    <div className="calenderMain">
        <div className="LiveDate">{date}</div>
        <div className="Calender">
            <div className="dayToday">
                <div className="dateNameToday"></div>
                <div className="dateToday">{new Date().getDate()}</div>
            </div>
            <div className="day">
                <div className="dateName">{}</div>
                <div className="date">{new Date().getDate() + 1}</div>
            </div>
            <div className="day">
                <div className="dateName">{}</div>
                <div className="date">{new Date().getDate() + 2}</div>
            </div>
            <div className="day">
                <div className="dateName">{}</div>
                <div className="date">{new Date().getDate() + 3}</div>
            </div>
            <div className="day">
                <div className="dateName">{}</div>
                <div className="date">{new Date().getDate() + 4}</div>
            </div>
            <div className="day">
                <div className="dateName">{}</div>
                <div className="date">{new Date().getDate() + 5}</div>
            </div>
            <div className="day">
                <div className="dateName">{}</div>
                <div className="date">{new Date().getDate() + 6}</div>
            </div>
            
        </div>
    </div>
  )
}

export default Calender