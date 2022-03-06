import React from 'react';
import QRCode from 'qrcode.react';


function QRgen({details}) {
  return (
    <div>
         <QRCode size={290}	value={details} />,
    </div>
  )
}

export default QRgen