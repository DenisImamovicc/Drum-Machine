import { useState,useRef } from 'react'
import './App.css'

function App() {
// const audioRef = useRef(null);

  function handlePlay(e) {
     console.log(e)
    const audio = e.target.childNodes[1]
    return audio.play()
    
  }

  return (
    <div id='drum-machine'>
      <div id='display'>
        <button className='drum-pad' onClick={handlePlay}id='Heater 1'>Q
          <audio  className='clip' id='Q' src="src/assets/Cev_H2.mp3" >
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Heater 2'>W
          <audio  className='clip' id='W' src="src/assets/Dsc_Oh.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Heater 3'>E
          <audio  className='clip' id='E' src="src/assets/Heater-1.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Heater 4'>A
          <audio  className='clip' id='A' src="src/assets/Heater-2.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Clap'>S
          <audio  className='clip' id='S' src="src/assets/Heater-3.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Open-HH'>D
          <audio  className='clip' id='D' src="src/assets/Heater-4_1.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id="Kick-n'-Hat">Z
          <audio  className='clip' id='Z' src="src/assets/Heater-6.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Kick'>X
          <audio  className='clip' id='X' src="src/assets/Kick_n_Hat.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Closed-HH'>C
          <audio  className='clip' id='C' src="src/assets/RP4_KICK_1.mp3">
          </audio>
        </button>
      </div>
    </div>
  )
}

export default App
