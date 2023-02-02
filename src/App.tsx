import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [displayInstrument, setdisplayInstrument] = useState("None")
  const presetDrumSet = [
    { name: "Heater 1", id: "Q", src: "src/assets/Heater-1.mp3" },
    { name: "Heater 2", id: "W", src: "src/assets/Heater-2.mp3" },
    { name: "Heater 3", id: "E", src: "src/assets/Heater-3.mp3" },
    { name: "Heater 4", id: "A", src: "src/assets/Heater-4_1.mp3" },
    { name: "Clap", id: "S", src: "src/assets/Heater-6.mp3" },
    { name: "Open HH", id: "D", src: "src/assets/Dsc_Oh.mp3" },
    { name: "Kick_n_Hat", id: "Z", src: "src/assets/Kick_n_Hat.mp3" },
    { name: "Kick", id: "X", src: "src/assets/RP4_KICK_1.mp3" },
    { name: "Closed-HH", id: "C", src: "src/assets/RP4_KICK_1.mp3" },
  ]
  function handlePlayMouseClick(e: any) {
    const button = document.getElementById(`${e.target.id}`)

    // console.log(e)
    const audio = e.target.childNodes[1]
    audio.currentTime = 0;
    button?.blur();
    setdisplayInstrument(e.target.id)
    return audio.play()
  }
  
  function findInstrumentNameByID(id:string) {
    return presetDrumSet.find(instrument=> instrument.id === id)
  }

  document.addEventListener("keypress", (e: any) => {
    const pressedkey = e.key.toUpperCase()
    // console.log(button,pressedkey);

    if (presetDrumSet.find(key=> key.id === pressedkey)) {
      const audio = document.getElementById(`${pressedkey}`)
      audio.currentTime = 0;

      const instrumentName = findInstrumentNameByID(pressedkey)?.name
      setdisplayInstrument(instrumentName)
      //  console.log(audio);
      return audio.play()
    }
    return null
  })

  return (
    <div id='drum-machine'>
      <div id='display'>
        <div id='displayInstrument'>{displayInstrument}</div>
        <div className='buttons'>
        {presetDrumSet.map((Instrument) => {
          return <div tabIndex={-1} className='drum-pad' onClick={handlePlayMouseClick} id={`${Instrument.name}`}>{Instrument.id}
            <audio preload='auto' className='clip' id={`${Instrument.id}`} src={`${Instrument.src}`}></audio>
          </div>
        })}
        </div>
      </div>
    </div>
  )
}

export default App