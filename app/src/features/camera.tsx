import React, { useRef, useState, useEffect } from 'react';

const Camera: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraAccess, setCameraAccess] = useState<boolean>(false);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [recordings, setRecordings] = useState<Blob[]>([]);
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
        setCapturedImages(prevImages => [...prevImages, capturedDataUrl]);
      }
    }
  };

  const handleToggleFacingMode = () => {
    setFacingMode(prevFacingMode => (prevFacingMode === 'user' ? 'environment' : 'user'));
  };

  const handleStartRecording = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const mediaStream = videoRef.current.srcObject as MediaStream;
      const mediaRecorder = new MediaRecorder(mediaStream);
      const recordedChunks: Blob[] = [];

      mediaRecorder.addEventListener('dataavailable', event => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      });

      mediaRecorder.addEventListener('stop', () => {
        setRecordings(prevRecordings => [...prevRecordings, new Blob(recordedChunks)]);
      });

      mediaRecorder.start();
    }
  };

  const handleStopRecording = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const mediaStream = videoRef.current.srcObject as MediaStream;
      mediaStream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div>
      {cameraAccess ? (
        <div>
          <video ref={videoRef} autoPlay playsInline></video>
          <button onClick={handleCapture}>Capture</button>
          {capturedImages.map((image, index) => (
            <img key={index} src={image} alt={`Captured ${index}`} />
          ))}
          <button onClick={handleStartRecording}>Start Recording</button>
          <button onClick={handleStopRecording}>Stop Recording</button>
          <button onClick={handleToggleFacingMode}>Toggle Camera</button>
          {recordings.map((recording, index) => (
            <video key={index} controls>
              <source src={URL.createObjectURL(recording)} type="video/webm" />
            </video>
          ))}
        </div>
      ) : (
        <p>Camera access denied.</p>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default Camera;
