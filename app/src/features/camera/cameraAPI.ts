
function dataURItoBlob(dataURI: string) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(",")[0].indexOf("base64") >= 0)
    byteString = atob(dataURI.split(",")[1]);
  else byteString = decodeURI(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  console.log("check 2", mimeString);
  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // return new Blob([ia], { type: mimeString });
  return new Blob([ia], { type: mimeString });
}

export const uploadVideoAPI = async (recordURL: string, pictureName: string, pictureDescription:string,record:string) => {
  const blob = await fetch(recordURL).then(r => r.blob());
  const formData = new FormData()
  formData.append("file", blob,'video.webm')
  formData.append("pictureName", pictureName);
  formData.append("pictureDescription", pictureDescription);

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/photos/upload/${record}`, {
      method: 'POST',
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: formData
    })

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error uploading file", error);
  }
};

export const uploadAPI = async (dataURL: string, pictureName:string, pictureDescription:string, record:string) => {
  let blob = dataURItoBlob(dataURL);
  let formData = new FormData()
  formData.append("file", blob,'image.png')
  formData.append("pictureName", pictureName)
  formData.append("pictureDescription", pictureDescription)

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/photos/upload/${record}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: formData
    })

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error uploading file", error);
  }
};
