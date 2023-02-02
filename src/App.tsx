import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [displayInstrument, setdisplayInstrument] = useState("None")
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
  function handlePlayMouseClick(e) {
    const button = document.getElementById(`${e.target.id}`)

    console.log(e)
    const audio = e.target.childNodes[1]
    button?.blur();
    setdisplayInstrument(e.target.id)
    return audio.play()
  }

  document.addEventListener("keypress", (e: any) => {

    const val = e.key.toUpperCase()
    // console.log(button,val);

    if (presetDrumSet.find(key=> key.id === val)) {
      const audio = document.getElementById(`${val}`)
      console.log("y",audio);
      return audio.play()
    }
    
    return null
  })


  return (
    <div id='drum-machine'>
      <div id='display'>
        <div>{displayInstrument}</div>
        {presetDrumSet.map((Instrument) => {
          return <div tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id={`${Instrument.name}`}>{Instrument.id}
            <audio className='clip' id={`${Instrument.id}`} src={`${Instrument.src}`}></audio>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
