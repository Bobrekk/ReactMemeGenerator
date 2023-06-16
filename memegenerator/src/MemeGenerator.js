import React, {useState, useEffect, useDebugValue} from 'react'
import './Meme.css'


export default function MemeGenerator() {

    const[topText, setTopText] = useState("");
    const[bottomText, setBottomText] = useState("");
    const[randoming, setRandoming] = useState("");
    const[allMemeing, setAllMemeing] = useState([]);

    useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes);
            setAllMemeing(memes);
        })
    })

    function handleTopChange(e){
        setTopText(e);
    }

    function handleBottomChange(e){
        setBottomText(e);
    }

    function randomPhoto(){
        let randomNum = Math.floor(Math.random()*100);
        setRandoming(allMemeing[randomNum]);
    }


  return (
    <div className='meme-from'>
        <div className='inputs'>
            <input type='text' className='input'
            name='topText'
            placeholder='Enter top text'
            value = {topText}
            onChange={e => handleTopChange(e.target.value)}
            />

            <input type='text' className='input'
            name='bottomText'
            placeholder='Enter bottom text'
            value={bottomText}
            onChange={e => handleBottomChange(e.target.value)}
            />

            <button onClick={() => randomPhoto()}>
                <div>
                    <span>
                        <p>Generate Meme<p>:)</p></p>
                    </span>
                </div>
                <div>
                    <span>
                        <p>Thanks<p>:D</p></p>
                    </span>
                </div>
            </button>
            <div className='image'>
                <img src={randoming.url}/>
                <h2 className='top'>{topText}</h2>
                <h2 className='bottom'>{bottomText}</h2>
            </div>
        </div>
    </div>
  )
}
