import Image from 'next/image'
import React, { useState } from 'react'

export default React.forwardRef(function Media(props:any, ref:any) {
    const [file, setFile] = useState<File| undefined>(undefined)
    const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        setFile(selectedFiles?.[0]);
      };
  return (
    <div>
        <div>
            {file && <Image alt='ddd' width={400} height={500} className='w-20  ring-2 rounded' src={URL.createObjectURL(file)} />}
        </div>
        <input ref={ref} type="file" onChange={selectImage} className="file-input w-full max-w-xs hidden"/>
    </div>
  )
})
