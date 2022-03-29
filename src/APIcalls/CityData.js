import React, {useEffect} from 'react'
import Axios from 'axios'


const axios = require('axios');

function CityData() {

    useEffect(() =>{
        axios.get('https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=4')
        .then(res => console.log(res.data)).catch(err => console.log(err))
    },[])

  return (
    <div>CityData</div>
  )
}

export default CityData