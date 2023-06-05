import React, { useState, useEffect } from 'react';

const PhotoPage = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    // 模拟从数据库中获取照片的异步操作
    fetchPhotosFromDatabase()
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  const fetchPhotosFromDatabase = (): Promise<string[]> => {
    // 模拟从数据库中获取照片的异步操作，返回一个Promise
    return new Promise((resolve, reject) => {
      // 假设从数据库获取照片的过程需要一些时间
      setTimeout(() => {
        const fetchedPhotos = [
          'photo1.jpg',
          'photo2.jpg',
          'photo3.jpg',
          // 添加更多照片
        ];
        resolve(fetchedPhotos);
      }, 2000); // 假设2秒后获取到照片数据
    });
  };

  const handleCapturePhoto = () => {
    // 处理拍照逻辑
    console.log('Capture photo');
  };

  const handleRecordVideo = () => {
    // 处理录像逻辑
    console.log('Record video');
  };

  return (
    <div>
      <h1>Photo Page</h1>
      <div className="photo-container">
        {photos.map((photo, index) => (
          <div key={index} className="photo">
            <img src={photo} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="capture-button" onClick={handleCapturePhoto}>
          Capture
        </button>
        <button className="record-button" onClick={handleRecordVideo}>
          Record
        </button>
      </div>
    </div>
  );
};

export default PhotoPage;
