import React, { useRef, useState, useEffect } from 'react';
import { FaCamera, FaVideo, FaStop, FaSyncAlt, FaTimes } from 'react-icons/fa';
import styles from "./camera.module.css"

const Camera: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraAccess, setCameraAccess] = useState<boolean>(false);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [recordings, setRecordings] = useState<string[]>([]);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [stream, setStream] = useState<boolean>(true);

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
    if (stream) {
      if (videoRef.current && canvasRef.current) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (video.videoWidth && video.videoHeight) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext('2d');
          if (context) {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const capturedDataUrl = canvas.toDataURL();
            setCapturedImages(prevImages => [...prevImages, capturedDataUrl]);
          }
        }
      }
      setStream(false);
    } else {
      setStream(true);
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
        const recordedBlob = new Blob(recordedChunks);
        const recordedUrl = URL.createObjectURL(recordedBlob);
        setRecordings(prevRecordings => [...prevRecordings, recordedUrl]);
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseCamera();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCloseCamera = () => {
    handleStopRecording();
    onClose();
  };

  const handleCancel = () => {
    setStream(true);
    setCapturedImages([]);
    setRecordings([]);
  };

  return (
    <div>
      {cameraAccess ? (
        <div>
          <div className={styles.video_container}>
            {stream && <video ref={videoRef} autoPlay playsInline></video>}
            <div className={styles.button_area}>
              {stream ? (
                <>
                  <button onClick={handleCapture} id="btn-photo" className={styles.button}>
                    <FaCamera />
                  </button>
                  <button onClick={handleStartRecording} id="btn-record">
                    <FaVideo />
                  </button>
                  <button onClick={handleStopRecording} id="btn-stop-record">
                    <FaStop />
                  </button>
                  <button onClick={handleToggleFacingMode} id="btn-cam-chooser">
                    <FaSyncAlt />
                  </button>
                  <button onClick={handleCloseCamera} id="btn-close-cam">
                    <FaTimes />
                  </button>
                </>
              ) : (
                <div className={styles.button_area}>
                  <button>save</button>
                  <button onClick={handleCancel}>cancel</button>
                </div>
              )}
            </div>
          </div>

          {!stream && (
            <div className={styles.video_container}>
              {capturedImages.map((image, index) => (
                <img key={index} src={image} alt={`Captured ${index}`} />
              ))}
              {recordings.map((recording, index) => (
                <video key={index} controls>
                  <source src={recording} type="video/webm" />
                </video>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p>Camera access denied.</p>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default Camera;
