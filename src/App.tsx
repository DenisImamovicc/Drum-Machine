import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const presetDrumSet = [
    { name: "Heater 1", id: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { name: "Heater 2", id: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { name: "Heater 3", id: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { name: "Heater 4", id: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { name: "Clap", id: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { name: "Open HH", id: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { name: "Kick_n_Hat", id: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { name: "Kick", id: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { name: "Closed-HH", id: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
  ]
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

  function name(params: type) {

  }


  const display = document.getElementById(`display`)
  document.addEventListener("keypress", (e: any) => {
    const button = document.getElementById(`${e.target.id}`)
    const val = e.key.toLowerCase()





    if (val === "q") {
      console.log(e);
      setdisplayInstrument(e.target.id)
      return e.target.childNodes[1].childNodes[0].childNodes[0].childNodes[1].firstElementChild.play();

    }
    if (val === "w") {
      console.log(e);
      return e.target.childNodes[1].childNodes[0].childNodes[0].childNodes[2].firstElementChild.play();

    }
    if (val === "e") {
      return e.target.childNodes[1].childNodes[0].childNodes[0].childNodes[3].firstElementChild.play();

    }
    if (val === "a") {
      return e.target.childNodes[1].childNodes[0].childNodes[0].childNodes[4].firstElementChild.play();

    }
    if (val === "s") {
      return e.target.childNodes[1].childNodes[0].childNodes[0].childNodes[5].firstElementChild.play();

    }
    if (val === "d") {
      return e.target.childNodes[1].childNodes[0].childNodes[0].childNodes[6].firstElementChild.play();

    }
    if (val === "z") {
      return e.target.childNodes[1].childNodes[0].childNodes[0].childNodes[7].firstElementChild.play();

    }
    if (val === "x") {
      return e.target.childNodes[1].childNodes[0].childNodes[0].childNodes[8].firstElementChild.play();

    }
    if (val === "c") {
      return e.target.childNodes[1].childNodes[0].childNodes[0].childNodes[9].firstElementChild.play();

    }
    return null;
  })


  return (
    <div id='drum-machine'>
      <div id='display'>{displayInstrument}
        {presetDrumSet.map((Instrument) => {
          return <button tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id={`${Instrument.name}`}>{Instrument.id}
            <audio className='clip' id={`${Instrument.id}`} src={`${Instrument.src}`}>
            </audio>
          </button>
        })}
      </div>
    </div>
  )
}

export default App
