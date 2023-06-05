import React, { useRef, useState, useEffect } from 'react';

const Camera: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraAccess, setCameraAccess] = useState<boolean>(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');

  useEffect(() => {
    const enableCameraAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode } });
        setCameraAccess(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    enableCameraAccess();
  }, [facingMode]);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const capturedDataUrl = canvas.toDataURL();
        setCapturedImage(capturedDataUrl);
      }
    }
  };

  const handleToggleFacingMode = () => {
    setFacingMode(prevFacingMode => (prevFacingMode === 'user' ? 'environment' : 'user'));
  };

  return (
    <div>
      {cameraAccess ? (
        <div>
          <video ref={videoRef} autoPlay playsInline></video>
          <button onClick={handleCapture}>Capture</button>
          <button onClick={handleToggleFacingMode}>Toggle Camera</button>
        </div>
      ) : (
        <p>Camera access denied.</p>
      )}
      {capturedImage && <img src={capturedImage} alt="Captured" />}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default Camera;
