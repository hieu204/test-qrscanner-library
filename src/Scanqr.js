import React, { useEffect, useRef } from 'react';
import Quagga from 'quagga';

const Scanqr = () => {
  const scannerRef = useRef(null);

  useEffect(() => {
    Quagga.init({
      inputStream: {
        type: 'LiveStream',
        constraints: {
          width: 640,
          height: 480,
          facingMode: 'environment',
        },
        target: scannerRef.current,
      },
      decoder: {
        readers: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader', 'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader', '2of5_reader', 'code_93_reader', 'qr_reader'],
      },
    }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected((data) => {
      console.log(data.codeResult.code);
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <div ref={scannerRef}>
      <h1>Scan QR</h1>
    </div>
  );
};

export default Scanqr;
