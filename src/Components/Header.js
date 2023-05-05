import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiedPiperAlt, faGithub, faInstagram, faBloggerB } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@500&display=swap');
</style>


const Header = () => {
    const instagram = 'https://www.instagram.com/u.jaehoon/';
    const github = 'https://github.com/jaehoon7368';
    const blog = 'https://velog.io/@jaehoon7368';
  return (
      <div className='header'>
          <div className='mainLog'>
              <h1>Yoo JaeHoon</h1>
              <h3>Backend Developer</h3>
        </div>
        <div class="btn_wrap">
            <span>SNS</span>
              <div class="container">
                  <button onClick={() => { window.open(instagram) }}>
                      <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 40 }} />
                  </button>

                  <button onClick={() => { window.open(github) }}>
                      <FontAwesomeIcon icon={faGithub} style={{ fontSize: 40 }}/>
                  </button>

                  <button onClick={() => { window.open(blog) }}>
                      <FontAwesomeIcon icon={faBloggerB} style={{ fontSize: 40 }}/>
                  </button>  
            </div>
        </div>      
    </div>
  )
}

export default Header