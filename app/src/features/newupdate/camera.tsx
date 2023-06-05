// import React, { useRef, useState } from 'react';
// import Webcam from 'react-webcam';
// import html2canvas from 'html2canvas';

// const Camera: React.FC = () => {
//   const webcamRef = useRef<Webcam>(null);
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);

//   const captureImage = () => {
//     const canvas = document.createElement('canvas');
//     html2canvas(webcamRef.current!.getScreenshot() as unknown as HTMLCanvasElement).then((screenshot) => {
//       canvas.width = screenshot.width;
//       canvas.height = screenshot.height;
//       const ctx = canvas.getContext('2d');
//       ctx!.drawImage(screenshot, 0, 0);
//       const dataUrl = canvas.toDataURL();
//       setCapturedImage(dataUrl);
//     });
//   };

//   return (
//     <div>
//       <Webcam audio={false} ref={webcamRef} screenshotFormat="image/png" />
//       <button onClick={captureImage}>Capture</button>
//       {capturedImage && <img src={capturedImage} alt="Captured" />}
//     </div>
//   );
// };

// export default Camera;
