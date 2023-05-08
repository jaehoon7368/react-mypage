import React, { useEffect, useRef } from 'react'
import File from './File'
import Language from './Language';
import Project from './Project';
import '../Style/Select.css';

const Select = () => {
    const topMenu = document.querySelectorAll('a');

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js"
        script.async = true
        document.body.appendChild(script);
    },[])

    useEffect(()=>{
        topMenu.forEach(elem => {
            const select = document.querySelector(elem.getAttribute('href'))
            elem.addEventListener('click', e => {
                e.preventDefault();
                select.scrollIntoView({
                    behavior: 'smooth',
                    offsetTop: 20
                });
            });
        });    
    },[])
  return (
      <div className='select-container'>
        <nav>
            <ul>
                <li><a href="#section-1">Skills</a></li>
                <li><a href="#section-3">Projects</a></li>
            </ul>
        </nav>

        <section id="section-1">
            <div className="languageAera">
                <Language />
            </div>
          </section>
          
        <section id="section-3">
            <span>
                <Project />
            </span>
        </section>   
    </div>
  )
}

export default Select