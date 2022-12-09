import { useState } from 'react'
import './App.css'

function App() {

  function handlePlay() {

  }


  return (
    <div id='drum-machine'>
      <div id='display'>
        <button className='drum-pad' onClick={handlePlay} id='Heater 1'>Q
          <audio src="src/assets/Cev_H2.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Heater 2'>W
          <audio src="src/assets/Dsc_Oh.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Heater 3'>E
          <audio src="src/assets/Heater-1.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Heater 4'>A
          <audio src="src/assets/Heater-2.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Clap'>S
          <audio src="src/assets/Heater-3.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Open-HH'>D
          <audio src="src/assets/Heater-4_1.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id="Kick-n'-Hat">Z
          <audio src="src/assets/Heater-6.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Kick'>X
          <audio src="src/assets/Kick_n_Hat.mp3">
          </audio>
        </button>
        <button className='drum-pad' onClick={handlePlay} id='Closed-HH'>C
          <audio src="src/assets/RP4_KICK_1.mp3">
          </audio>
        </button>

      </div>
    </div>
  )
}

export default App
