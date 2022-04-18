import React , {useState} from 'react'
import Countdown from 'react-countdown';
import './Content.css';
export const Header = () => {
    return (
        <h1>WARNET</h1>
        
    // <img src={require('../asset/logo_warnet.png')}></img>
    )
  }
  
export const Picked = () => {
    const [isChoose, setIsChoose] = useState()
    const [isPick, setIsPick] = useState()
    const [currentChar, setCurrentChar] = useState()

    const [selectChar1, setSelectChar1] = useState()
    const [selectChar2, setSelectChar2] = useState()
    const [selectChar3, setSelectChar3] = useState()
    const [selectChar4, setSelectChar4] = useState()
    const [selectChar5, setSelectChar5] = useState()
    const [selectChar6, setSelectChar6] = useState()
    const [selectChar7, setSelectChar7] = useState()
    const [selectChar8, setSelectChar8] = useState()
    const [selectChar9, setSelectChar9] = useState()
    const [selectChar10, setSelectChar10] = useState()
    const [selectChar11, setSelectChar11] = useState()
    const [selectChar12, setSelectChar12] = useState()
    const [selectChar13, setSelectChar13] = useState()
    const [selectChar14, setSelectChar14] = useState()
    const [selectChar15, setSelectChar15] = useState()
    const [selectChar16, setSelectChar16] = useState()

    const [pickChar1, setpickChar1] = useState()
    const [pickChar2, setpickChar2] = useState()
    const [pickChar3, setpickChar3] = useState()
    const [pickChar4, setpickChar4] = useState()
    const [pickChar5, setpickChar5] = useState()
    const [pickChar6, setpickChar6] = useState()
    const [pickChar7, setpickChar7] = useState()
    const [pickChar8, setpickChar8] = useState()

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
    function handleCurrent(e, current, choose, pick){
        e.preventDefault();
        setCurrentChar(current)
        setIsChoose(choose)
        setIsPick(pick)
    }
    function handleChoose(e, image, current){
        e.preventDefault();
        if(isChoose){
            if(current == 'Char1') setSelectChar1(image)
            else if(current == 'Char2') setSelectChar2(image)
            else if(current == 'Char3') setSelectChar3(image)
            else if(current == 'Char4') setSelectChar4(image)
            else if(current == 'Char5') setSelectChar5(image)
            else if(current == 'Char6') setSelectChar6(image)
            else if(current == 'Char7') setSelectChar7(image)
            else if(current == 'Char8') setSelectChar8(image)
            else if(current == 'Char9') setSelectChar9(image)
            else if(current == 'Char10') setSelectChar10(image)
            else if(current == 'Char11') setSelectChar11(image)
            else if(current == 'Char12') setSelectChar12(image)
            else if(current == 'Char13') setSelectChar13(image)
            else if(current == 'Char14') setSelectChar14(image)
            else if(current == 'Char15') setSelectChar15(image)
            else if(current == 'Char16') setSelectChar16(image)   
        }
    }
    function handlePick(e, image, current){
        e.preventDefault();
        if(isPick){
            if(current == 'Char1') setpickChar1(image)
            else if(current == 'Char2') setpickChar2(image)
            else if(current == 'Char3') setpickChar3(image)
            else if(current == 'Char4') setpickChar4(image)
            else if(current == 'Char5') setpickChar5(image)
            else if(current == 'Char6') setpickChar6(image)
            else if(current == 'Char7') setpickChar7(image)
            else if(current == 'Char8') setpickChar8(image)
        }
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
                        <img src={selectChar1} onClick={e => handleCurrent(e, 'Char1', true, false)}/>
                        <img src={selectChar2} onClick={e => handleCurrent(e, 'Char2', true, false)}/>
                        <img src={selectChar3} onClick={e => handleCurrent(e, 'Char3', true, false)}/>
                        <img src={selectChar4} onClick={e => handleCurrent(e, 'Char4', true, false)}/>
                    </div>
                    
                    <div className='teamTwoA'>
                        <img src={selectChar5} onClick={e => handleCurrent(e, 'Char5', true, false)}/>
                        <img src={selectChar6} onClick={e => handleCurrent(e, 'Char6', true, false)}/>
                        <img src={selectChar7} onClick={e => handleCurrent(e, 'Char7', true, false)}/>
                        <img src={selectChar8} onClick={e => handleCurrent(e, 'Char8', true, false)}/>
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
                        <img src={selectChar9} onClick={e => handleCurrent(e, 'Char9', true, false)}></img>
                        <img src={selectChar10} onClick={e => handleCurrent(e, 'Char10', true, false)}></img>
                        <img src={selectChar11} onClick={e => handleCurrent(e, 'Char11', true, false)}></img>
                        <img src={selectChar12} onClick={e => handleCurrent(e, 'Char12', true, false)}></img>
                    </div>
                    <div className='teamTwoB'>
                        <img src={selectChar13} onClick={e => handleCurrent(e, 'Char13', true, false)}></img>
                        <img src={selectChar14} onClick={e => handleCurrent(e, 'Char14', true, false)}></img>
                        <img src={selectChar15} onClick={e => handleCurrent(e, 'Char15', true, false)}></img>
                        <img src={selectChar16} onClick={e => handleCurrent(e, 'Char16', true, false)}></img>
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
                    <img src={pickChar1} onClick={e => handleCurrent(e, 'Char1', false, true)}></img>
                    <img src={pickChar2} onClick={e => handleCurrent(e, 'Char2', false, true)}></img>
                    <img src={pickChar3} onClick={e => handleCurrent(e, 'Char3', false, true)}></img>
                    <img src={pickChar4} onClick={e => handleCurrent(e, 'Char4', false, true)}></img>
                </div>
                <div className='chooseChar'>
                    {
                        allData.map((image, index) => (
                            <img src={image} key={characterId[index]} alt="character" onClick={e => (handleSound(e, index), handleChoose(e, image, currentChar), handlePick(e, image, currentChar))}></img>
                        ))
                    }
                </div>
                <div className='chooseChar'>
                    {
                        allData.map((image, index) => (
                            <img src={image} key={characterId[index]} alt="character" onClick={e => (handleSound(e, index), handleChoose(e, image, currentChar), handlePick(e, image, currentChar))}></img>
                        ))
                    }
                </div>
                <div className='pickedChar'>
                    <img src={pickChar5} onClick={e => handleCurrent(e, 'Char5', false, true)}></img>
                    <img src={pickChar6} onClick={e => handleCurrent(e, 'Char6', false, true)}></img>
                    <img src={pickChar7} onClick={e => handleCurrent(e, 'Char7', false, true)}></img>
                    <img src={pickChar8} onClick={e => handleCurrent(e, 'Char8', false, true)}></img>
                </div>
                <div className='teamsPicked2'>
                    <p>Picked Char</p>
                </div>
            </div>
        </>
    )
}