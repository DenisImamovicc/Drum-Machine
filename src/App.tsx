import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const drumSet = [{}]
  const [displayInstrument, setdisplayInstrument] = useState("None")
  function handlePlayMouseClick(e) {
    const button = document.getElementById(`${e.target.id}`)

    console.log(e)
    const audio = e.target.childNodes[1]
    button?.blur();
    setdisplayInstrument(e.target.id)
    return audio.play()
  }

  function handlePlayKeyBoard(e) {
    return console.log(e.key.toUpperCase());

  }

// useEffect(() => {
//   // const Display = document.getElementById('display')

// }, [])


const display = document.getElementById(`display`)
document.addEventListener("keypress",(e:any)=>{
  const button = document.getElementById(`${e.target.id}`)


    if (e.key.toUpperCase()==="Q") {
      console.log(e);
      button?.focus();
      return e.target?.lastChild.play();

    }
    if (e.key.toUpperCase()==="W") {
      console.log(e);
      return e.target?.lastChild.play();

    }
    if (e.key.toUpperCase()==="E") {
      return e.target?.lastChild.play();

    }
    if (e.key.toUpperCase()==="A") {
      return e.target?.lastChild.play();

    }
    if (e.key.toUpperCase()==="S") {
      return e.target?.lastChild.play();

    }
    if (e.key.toUpperCase()==="D") {
      return e.target?.lastChild.play();

    }
    if (e.key.toUpperCase()==="Z") {
      return e.target?.lastChild.play();

    }
    if (e.key.toUpperCase()==="X") {
      return e.target?.lastChild.play();

    }
    if (e.key.toUpperCase()==="C") {
      return e.target?.lastChild.play();

    }
    return null;
  })


  return (
    <div id='drum-machine'>
      <div id='display'>{displayInstrument}
        <button tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id='Heater 1' >Q
          <audio className='clip' id='Q' src="src/assets/Cev_H2.mp3" >
          </audio>
        </button>
        <button tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id='Heater 2'>W
          <audio className='clip' id='W' src="src/assets/Dsc_Oh.mp3">
          </audio>
        </button>
        <button tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id='Heater 3'>E
          <audio className='clip' id='E' src="src/assets/Heater-1.mp3">
          </audio>
        </button>
        <button tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id='Heater 4'>A
          <audio className='clip' id='A' src="src/assets/Heater-2.mp3">
          </audio>
        </button>
        <button tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id='Clap'>S
          <audio className='clip' id='S' src="src/assets/Heater-3.mp3">
          </audio>
        </button>
        <button tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id='Open-HH'>D
          <audio className='clip' id='D' src="src/assets/Heater-4_1.mp3">
          </audio>
        </button>
        <button tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id="Kick-n'-Hat">Z
          <audio className='clip' id='Z' src="src/assets/Heater-6.mp3">
          </audio>
        </button>
        <button tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id='Kick'>X
          <audio className='clip' id='X' src="src/assets/Kick_n_Hat.mp3">
          </audio>
        </button>
        <button tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id='Closed-HH'>C
          <audio className='clip' id='C' src="src/assets/RP4_KICK_1.mp3">
          </audio>
        </button>
      </div>
    </div>
  )
}

export default App
