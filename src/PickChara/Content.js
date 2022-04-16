import React , {useState} from 'react'
import Countdown from 'react-countdown';
import './Content.css';
import Select from 'react-select';
export const Header = () => {
    return (
        <h1>WARNET</h1>
        
    // <img src={require('../asset/logo_warnet.png')}></img>
    )
  }
  
export const Picked = () => {
    // const importAll = (r) => {
    //     return r.keys().map(r);
    //   };
      
    // const allData = importAll(
    //     require.context("../asset/Character Card", false, /\.png$/)
    // )
    // console.log(allData)
    const [currentChar, setCurrentChar] = useState()
    const [selectChar1, setSelectChar1] = useState()
    const [selectChar2, setSelectChar2] = useState()
    const [selectChar3, setSelectChar3] = useState()
    const [selectChar4, setSelectChar4] = useState()
    const [selectChar5, setSelectChar5] = useState()
    const [selectChar6, setSelectChar6] = useState()
    const [selectChar7, setSelectChar7] = useState()
    const [selectChar8, setSelectChar8] = useState()
    const renderer = props => {
        return (
            <div>
                {props.formatted.minutes}:{props.formatted.seconds}
            </div>
        );
      };
      const importAll = (r) => {
          return r.keys().map(r);
        };
        
      const allData = importAll(
          require.context("../asset/Character Card", false, /\.png$/)
      )
      const characterId =  allData.map(image => (
          (image.split('/'))[3].split('.')[0])
      )
      const allSound = importAll(
          require.context("../asset/Sound", false, /\.ogg$/)
      )
      function handleSound(e, index){
          e.preventDefault();
          const audio = new Audio(
              allSound[index]
          );
          audio.play();
      }
      function handleChoose(e, image, current){
          e.preventDefault();
          if(current == 'Char1') setSelectChar1(image)
          else if(current == 'Char2') setSelectChar2(image)
          else if(current == 'Char3') setSelectChar3(image)
          else if(current == 'Char4') setSelectChar4(image)
          else if(current == 'Char5') setSelectChar5(image)
          else if(current == 'Char6') setSelectChar6(image)
          else if(current == 'Char7') setSelectChar7(image)
          else if(current == 'Char8') setSelectChar8(image)
        // switch(current){
        //     case 'Char1':
        //         setSelectChar1(image)
        //     case 'Char2':
        //         setSelectChar2(image)
        // }
        //     case 'Char3':
        //         setSelectChar3(image)
        //     case 'Char4':
        //         setSelectChar4(image)
        //     case 'Char5':
        //         setSelectChar5(image)
        //     case 'Char6':
        //         setSelectChar6(image)
        //     case 'Char7':
        //         setSelectChar7(image)
        //     case 'Char8':
        //         setSelectChar8(image)
        // }
      }
      function handleCurrent(e, current){
            e.preventDefault();
            setCurrentChar(current)
      }
    return (
        <>
            <div className='containerPicked'>
                <div className='teams'>
                    <p>Team 1</p>
                    <p>Team 2</p>
                </div>
                <div className='playerA'>
                    <div className='teamOne'>
                        {/* <img src={require('../asset/Character Card/albedo.png')}></img>
                        <img src={require('../asset/Character Card/ayato.png')}></img>
                        <img src={require('../asset/Character Card/barbara.png')}></img>
                        <img src={require('../asset/Character Card/klee.png')}></img> */}
                        <img src={selectChar1} onClick={e => handleCurrent(e, 'Char1')}/>
                        <img src={selectChar2} onClick={e => handleCurrent(e, 'Char2')}/>
                        <img src={selectChar3} onClick={e => handleCurrent(e, 'Char3')}/>
                        <img src={selectChar4} onClick={e => handleCurrent(e, 'Char4')}/>
                    </div>
                    
                    <div className='teamTwoA'>
                        <img src={selectChar5} onClick={e => handleCurrent(e, 'Char5')}/>
                        <img src={selectChar6} onClick={e => handleCurrent(e, 'Char6')}/>
                        <img src={selectChar7} onClick={e => handleCurrent(e, 'Char7')}/>
                        <img src={selectChar8} onClick={e => handleCurrent(e, 'Char8')}/>
                    </div>
                </div>
                <div className='timer'>
                    <div>
                    <Countdown
                        date={Date.now() + 5*60000}
                        intervalDelay={0}
                        renderer={renderer}
                        zeroPadTime={2}
                    />
                    <span className='timerinvs'>00:00</span>
                    </div>
                </div>
                <div className='playerB'>
                    <div className='teamOne'>
                        <img src={require('../asset/Character Card/mona.png')}></img>
                        <img src={require('../asset/Character Card/ayaka.png')}></img>
                        <img src={require('../asset/Character Card/kazuha.png')}></img>
                        <img src={require('../asset/Character Card/diona.png')}></img>
                    </div>
                    <div className='teamTwoB'>
                        <img src={require('../asset/Character Card/eula.png')}></img>
                        <img src={require('../asset/Character Card/raiden.png')}></img>
                        <img src={require('../asset/Character Card/rosaria.png')}></img>
                        <img src={require('../asset/Character Card/zhongli.png')}></img>
                    </div>
                </div>
                <div className='teams'>
                    <p>Team 1</p>
                    <p>Team 2</p>
                </div>
            </div>

            <div className='containerChoose'>
                <div className='teamsPicked'>
                    <p>Picked Char</p>
                </div>
                <div className='pickedChar'>
                    <img src={require('../asset/Character Card/mona.png')}></img>
                    <img src={require('../asset/Character Card/ayaka.png')}></img>
                    <img src={require('../asset/Character Card/kazuha.png')}></img>
                    <img src={require('../asset/Character Card/diona.png')}></img>
                </div>
                <div className='chooseChar'>
                    {
                        allData.map((image, index) => (
                            <img src={image} key={characterId[index]} alt="character" onClick={e => (handleSound(e, index), handleChoose(e, image, currentChar))}></img>
                        ))
                    }
                </div>
                <div className='chooseChar'>
                    {
                        allData.map((image, index) => (
                            <img src={image} key={characterId[index]} alt="character" onClick={e => handleSound(e, index)}></img>
                        ))
                    }
                </div>
                <div className='pickedChar'>
                    <img src={require('../asset/Character Card/mona.png')}></img>
                    <img src={require('../asset/Character Card/ayaka.png')}></img>
                    <img src={require('../asset/Character Card/kazuha.png')}></img>
                    <img src={require('../asset/Character Card/diona.png')}></img>
                </div>
                <div className='teamsPicked2'>
                    <p>Picked Char</p>
                </div>
            </div>
        </>
    )
}