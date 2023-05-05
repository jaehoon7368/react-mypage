import React from 'react'

const FileCard = (props) => {
  return (
    <div className='file-card'>
      <a href={props.file} download>
        <div class="box-file">
          <p>{props.title}</p>
        </div>
      </a>
    </div>
  )
}

export default FileCard