import React from 'react'
import LanguageCard from './LanguageCard'

import java from '../image/java.png'
import spring from '../image/spring.png'
import servlet from '../image/servlet.png'
import oracle from '../image/oracle.png'
import mybatis from '../image/mybatis.png'
import html from '../image/html-logo.png'
import css from '../image/css.png'
import javascript from '../image/javascript.png'
import react from '../image/react.png'
import tomcat from '../image/tomcat.png'
import github from '../image/github.png'
import aws from '../image/aws.png'

import '../Style/Language.css'


const Language = () => {
  return (
        <div className="language-container">
          <p>Skills</p>
          <p className='color-yellow'>Strong</p>
            <div className='language-box'>
                <LanguageCard title="Java" img={java}/>
                <LanguageCard title="Servelt & Jsp" img={servlet}/>
                <LanguageCard title="Spring" img={spring} />
                <LanguageCard title="Oracle" img={oracle}/>
                <LanguageCard title="Mybatis" img={mybatis}/>
            </div>
          <p className='color-yellow'>Knowledgable</p>
          <div className='language-box'>
                <LanguageCard title="Javascript" img={javascript}/>
                <LanguageCard title="React" img={react}/>
            </div>
            <p className='color-yellow'>ETC</p>
            <div className='language-box'>
                <LanguageCard title="Apache Tomcat" img={tomcat}/>
                <LanguageCard title="Github" img={github}/>
                <LanguageCard title="AWS" img={aws} />
            </div>
        </div>
  )
}

export default Language