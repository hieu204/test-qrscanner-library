import React, { useState, useEffect, useRef } from "react";
import Quagga from "quagga";

const Scanqr = () => {
  const scannerRef = useRef(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment",
          },
          target: scannerRef.current,
        },
        decoder: {
          readers: ["code_128_reader"],
        },
      },
      function (err) {
        if (err) {
          console.log(err);
          return;
        }
        Quagga.start();
      },
    );

    Quagga.onProcessed((data) => {
      console.log("process", data);
      if(data && data?.codeResult){
        setResult(data?.codeResult?.code);
        Quagga.stop();
      }
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <div>
      <div ref={scannerRef}></div>
      <p>{result}</p>
    </div>
  );
};

export default Scanqr;
