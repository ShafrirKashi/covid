import axios from 'axios'

export async function serverReq(method,urlRel, body, params){
    const res = await axios ({
        method: method,
        url: `http://localhost:4000${urlRel}`,
        data: body,
        params: params,
        headers: {authrization: localStorage.token || sessionStorage.token || ""}

    })
    return res.data
} 

export function dateFormat(date) {
    
    let year,
    month,
    day,
    hour,
    minute,
    second;
    
    const miliseconds = new Date(date).getTime()

    second = Math.floor(miliseconds / 1000);
    minute = Math.floor(second / 60);
    second = second % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    month = Math.floor(day / 30);
    day = day % 30;
    year = Math.floor(month / 12);
    month = month % 12;

    return {
        day: day,
        month: month,
        year: year
    }
}