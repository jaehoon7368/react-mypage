import React from 'react'
import '../Style/introduce.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiedPiperAlt, faGithub, faInstagram, faBloggerB } from "@fortawesome/free-brands-svg-icons";


const Introduce = () => {
    const instagram = 'https://www.instagram.com/u.jaehoon/';
    const github = 'https://github.com/jaehoon7368';
    const blog = 'https://velog.io/@jaehoon7368';
  return (
      <div className='Title'>
        
        <div class="container-introduce">
            <div class="card card0">
                <div class="border">
                    <h2>Yoo JaeHoon</h2>
                    <div class="icons">
                        <button onClick={() => { window.open(instagram) }}>
                        <FontAwesomeIcon className='fa' icon={faInstagram} style={{ fontSize: 25}} aria-hidden="true"/>
                    </button>

                    <button onClick={() => { window.open(github) }}>
                        <FontAwesomeIcon className='fa' icon={faGithub} style={{ fontSize: 25}} aria-hidden="true"/>
                    </button>

                    <button onClick={() => { window.open(blog) }}>
                        <FontAwesomeIcon className='fa' icon={faBloggerB} style={{ fontSize: 25}}/>
                    </button>  
                    </div>
                </div>
            </div>
        </div>

        <h3>Hello,<br /> I'm backend developer Yoo Jaehoon. <br />I'm like a sponge. so I'll absorb everything I learn!</h3>
        <p>⬇️⬇️ Scroll Down! ⬇️⬇️</p>
    </div>
  )
}

export default Introduce