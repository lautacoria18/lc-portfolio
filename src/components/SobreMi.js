import React from 'react'
import './SobreMi.css'

export default function SobreMi() {
  return (
    <div className='skills'>
      <h2>Habilidades</h2>
      <div className='lista'>
        <div>
      <ul>
      <li className='liAbout'><span>Unity</span></li>
      <li className='liAbout'><span>C#</span></li>

      <li className='liAbout'><span>VR Development</span></li>
      </ul>
      </div>
      <div>
        <ul>
        <li className='liAbout'><span>Photon Network</span></li>
        <li className='liAbout'><span>SQL</span></li>
      <li className='liAbout'><span>C++</span></li>

        </ul>

      </div>
      <div>
        <ul>
        <li className='liAbout'><span>Git</span></li>
        <li className='liAbout'><span>Javascript</span></li>
        <li className='liAbout'><span>React</span></li>
        </ul>

      </div>
      </div>
    </div>
  )
}
