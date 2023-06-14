
import React, { useState } from 'react';
// interface photos {
//   id: number;
//   user_id: number;
//   name: string;
//   s3_name: string;
//   description: string;
//   record_id: number;
// }


// const uploadForm = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event: any) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('file', file!);

//       const res = await fetch(`${process.env.REACT_APP_API_SERVER}/uploads`, {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await res.json();
//       console.log('Uploaded file:', result);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };
// }
// export default uploadForm;


function dataURItoBlob(dataURI: string) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else
    byteString = decodeURI(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  console.log("check 2",mimeString)
  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // return new Blob([ia], { type: mimeString });
  return new Blob([ia], { type: mimeString });
}

export const uploadVideoAPI = async (recordURL: string) => {
  const blob = await fetch(recordURL).then(r => r.blob());
  console.log(blob.type)
  const formData = new FormData()
  formData.append("file", blob,'video.webm')

  try {
    const res = await fetch(`http://localhost:8080/photos/upload`, {
      method: 'POST',
      body: formData
    })

    const result = await res.json()
    return result
  } catch (error) {
    console.error("Error uploading file", error)

  }

}


export const uploadAPI = async (dataURL: string) => {
  let blob = dataURItoBlob(dataURL);
  console.log(blob.type)
  let formData = new FormData()
  formData.append("file", blob,'image.png')

  try {
    const res = await fetch(`http://localhost:8080/photos/upload`, {
      method: 'POST',
      body: formData
    })

    const result = await res.json()
    return result
  } catch (error) {
    console.error("Error uploading file", error)

  }

}


