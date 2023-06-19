import { FaCamera, FaVideo, FaStop, FaSyncAlt, FaTimes } from 'react-icons/fa';
import useStyles from './cameraCss';
import { TbSend } from "react-icons/tb";
import { TiCancel } from "react-icons/ti";
import { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadAPI, uploadVideoAPI } from './cameraAPI';
import { useParams } from 'react-router';
// import uploadForm from './cameraAPI';

const Camera: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const record = useParams();
  console.log(record.id)
  const { classes } = useStyles();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const camRef = useRef<any>(null);
  const [cameraAccess, setCameraAccess] = useState<boolean>(false);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [pictureName, setPictureName] = useState<string>("");
  const [pictureDescription, setPictureDescription] = useState<string>("");
  const [recordings, setRecordings] = useState<string>();
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [stream, setStream] = useState<boolean>(true);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isVideoShow, setIsVideoShow] = useState<boolean>(false);
  const [isShowPicture, setIsShowPicture] = useState<boolean>(false);
  const [mode, setMode] = useState("")


  useEffect(() => {
    const enableCameraAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video:
          {
            facingMode,
            width: {
              max: 400, min: 400
            },
            height: {
              max: 600, min: 600
            }
          }
        });
        setCameraAccess(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };
    enableCameraAccess();
  },);

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
            setCapturedImages((prevImages: any) => [...prevImages, capturedDataUrl]);
          }
        }
      }
      setMode("photo")
      setStream(false);

    } else {
      setStream(true);
      setMode("")
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
        console.log("data available")
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      });

      mediaRecorder.addEventListener('stop', () => {
        console.log("stop!")
        const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
        const recordedUrl = URL.createObjectURL(recordedBlob);
        // var a = document.createElement('a')
        // a.href = recordedUrl
        // a.style.display = 'none'
        // a.download = 'video.webm'
        // a.click()

        setRecordings(recordedUrl);
      });


      setMode("video")
      setIsRecording(true);

      mediaRecorder.start();

      camRef.current = mediaRecorder
    }
  };

  const handleStopRecording = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const mediaStream = videoRef.current.srcObject as MediaStream;
      console.log("check handle stop video ref", mediaStream)
      mediaStream.getTracks().forEach(track => {
        track.stop()

      }
      );
      camRef.current.stop()
    }

    setIsRecording(false);
    setIsVideoShow(true);
    setStream(false)

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
    onClose();
  };

  const handleCancel = async () => {
    setStream(true);
    setCapturedImages([]);
    setRecordings(undefined);
  };


  // const handleUploadPhoto = async () => {
  //   let result = await uploadAPI(capturedImages[0], recordings[0])
  //   console.log(result)
  //  }

  return (
    <div style={{ position: "fixed", height: "100%", top: 0, left: 0 }}>
      {cameraAccess ? (

        <>
          {stream ?
            <div className={classes.videoContainer + " myclass"}>
              {stream && <video className={classes.visibleVideo} ref={videoRef} autoPlay playsInline></video>}
              <div className={classes.buttonArea + " buttonArea"}>
                {stream ? (
                  <>
                    <button onClick={handleCapture} id="btn-photo" className={classes.button}>
                      <FaCamera className={classes.buttonIcon} />
                    </button>
                    {!isRecording && (
                      <button onClick={handleStartRecording} id="btn-record" className={classes.button}>
                        <FaVideo className={classes.buttonIcon} />
                      </button>
                    )}
                    {isRecording && (
                      <button onClick={handleStopRecording} id="btn-stop-record" className={classes.button}>
                        <FaStop className={classes.buttonIcon} />
                      </button>
                    )}
                    <button onClick={handleToggleFacingMode} id="btn-cam-chooser" className={classes.button}>
                      <FaSyncAlt className={classes.buttonIcon} />
                    </button>
                    <button onClick={handleCloseCamera} id="btn-close-cam" className={classes.button}>
                      <FaTimes className={classes.buttonIcon} />
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            : (
              <div className={classes.videoContainer + " display_result"}>
                {mode === "photo" ?
                  <>
                    {capturedImages.map((image, index) => (
                      <img key={index} src={image} alt={`Captured ${index}`} />
                    ))}
                    <div className={classes.saveCancelArea + " Area1"}>
                      {!stream ? (<>
                        <button onClick={handleCancel} className={classes.button}><TiCancel className={classes.buttonIcon} /></button>
                        <button onClick={() => uploadAPI(capturedImages[0], pictureName, pictureDescription, record.id ?? "")} className={classes.button}><TbSend className={classes.buttonIcon} /></button></>) : (<></>)}
                    </div>
                  </> : <></>}
                {mode === "video" ?
                  <>
                    {isVideoShow && recordings && (
                      <video controls>
                        <source src={recordings} type="video/webm" />
                      </video>
                    )}
                    <div className={classes.saveCancelArea + " Area"}>
                      {!isRecording && recordings ? (<>
                        <button onClick={handleCancel} className={classes.button}><TiCancel className={classes.buttonIcon} /></button>
                        <button onClick={() => uploadVideoAPI(recordings, pictureName, pictureDescription, record.id ?? "")} className={classes.button}><TbSend className={classes.buttonIcon} /></button></>
                      ) : (<></>)}
                    </div>
                  </> : <></>}

                <div className={classes.pictureName}>
                  <input ></input>
                  <br></br>
                  <input></input>
                </div>
              </div>

            )}

        </>
      ) : (
        <p>Camera access denied.</p>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

    </div>

  );
};

export default Camera;
