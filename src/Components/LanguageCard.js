import React from 'react'
import '../Style/Language.css'

const LanguageCard = (props) => {
    return (
        <div className="lang-card">
            <img src={props.img} />
            <p>{props.title}</p>
        </div>
  )
}

export default LanguageCard