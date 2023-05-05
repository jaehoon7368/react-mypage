import React from 'react'
import intro from "../image/intro.png"
import '../Style/File.css';
import FileCard from './FileCard';
import resume from '../image/Resume(jaehoon).pdf';

const File = () => {
  return (
      <div className='file-box'>
          <p>Download</p>
          <div className="container_intro">
            <FileCard file={resume} title='Resume' />
        </div>
    </div>
  )
}

export default File