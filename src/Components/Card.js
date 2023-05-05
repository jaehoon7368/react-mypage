import React from 'react'
import '../Style/project.css';

const Card = (props) => {
  return (
    <div>
      <div className="img-frame">
                <img src={props.img} alt={props.alt} className="slide1" />
                <div className="text-frame">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <p className='my'>{props.my}</p>
                    <ul>
                      {props.my1?<li>{props.my1}</li>:''}
                      {props.my2?<li>{props.my2}</li>:''}
                      {props.my3?<li>{props.my3}</li>:''}
                      {props.my4?<li>{props.my4}</li>:''}
                    </ul>
                    <div className="showArea">
                        <div className="stack">
                            <img src={props.img1} alt="" />
                            <img src={props.img2} alt="" />
                            <img src={props.img3} alt="" />
                            {props.img4?<img src={props.img4} alt="" />:''}
                        </div>
                        <div className="goBtn">
                            <a href={props.page} target="_blank">Page</a>
                            <a href={props.git} target="_blank">Github</a>
                        </div>
                    </div>

                </div>
        </div>    
    </div>
  )
}

export default Card