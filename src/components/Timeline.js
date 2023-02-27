import React from 'react'
import './Timeline.css'
export default function Timeline() {
  return (
    <div>
        <h1 className='titleExp'>Experiencia Laboral</h1>
<ul class="timeline">


<li>
    <div class="direction-r">
        <div class="flag-wrapper">
            <span class="flag">Web developer</span>
            <span class="time-wrapper"><span class="time">05/2022 - Present</span></span>
        </div>
        <div class="desc">Freelance | Desarrollé una pagina para una fotógrafa profesional</div>
    </div>
</li>


<li>
    <div class="direction-l">
        <div class="flag-wrapper">
            <span class="flag">Unity developer</span>
            <span class="time-wrapper"><span class="time">02/2022-Present</span></span>
        </div>
        <div class="desc">Independent | En mis tiempos libres trabajo en mis juegos personales, he subido uno a la Play Store</div>
    </div>
</li>


<li>
    <div class="direction-r">
        <div class="flag-wrapper">
            <span class="flag">Unity Developer </span>
            <span class="time-wrapper"><span class="time">08/2022 - present</span></span>
        </div>
        <div class="desc"> Global Training Technology | Actualmente desarrollando en conjunto un simulador de realidad virtual en multijugador para entrenar obreros en la industria petrolera.
        <li>Me encargué de armar la arquitectura del proyecto e integrarle el framework Photon (Servidor online)</li>
Desarrollé ejercicios multijugador en realidad virtual para el casco Oculus Quest 2</div>
    </div>
</li>

</ul>
</div>

  )
}
