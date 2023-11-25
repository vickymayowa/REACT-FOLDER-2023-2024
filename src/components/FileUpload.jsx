import React , { useState} from 'react'

const FileUpload = () => {
  let url = ''
  const [file, setFile] = useState('');
  const uploadFile = (e)=>{
    let image = e.target.files(0);
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = ()=>{
      setFile(reader.result);
    }
  }
  const upload = ()=>{
    axios.post(url,file);
  }
  return (
    <>
        {/* create a form for file upload using tailwind css to upload */}
        <div>
          <div>
            <input type="file"  onChange={(e)=>uploadFile(e)}/>
            <button onClick={upload}>Upload File</button>
          </div>
        </div>

    </>
  )
}

export default FileUpload