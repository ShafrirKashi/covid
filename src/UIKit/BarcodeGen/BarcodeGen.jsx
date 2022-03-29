// import Barcode from 'react-barcode';
import React, {useState} from 'react'
var Barcode = require('react-barcode');

function BarcodeGen({details}) {
 
const [state, setState] = useState('https://github.com/kciter')

//   update(event) {
//     te({
//       value: event.target.value,
//     });
//   }

 
    return (
      <div>
 
        <Barcode
          value={details}
          width={4.5}
          height={260}
          margin={0}
        />
      </div>
    );
  
}

export default BarcodeGen