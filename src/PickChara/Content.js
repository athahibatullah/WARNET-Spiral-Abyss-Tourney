import React , {useState, useRef, useEffect} from 'react'
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
    const options = [
        { value: 'Kibadda', label: 'Kibadda' },
        { value: 'iScav', label: 'iScav' },
        { value: 'Godoffoy', label: 'Godoffoy' }
      ]
    const [selectedOption1, setSelectedOption1] = useState(options[0]); 
    const [selectedOption2, setSelectedOption2] = useState(options[0]); 
    const [charA, setCharA] = useState(['/static/media/albedo.5bc6986b2ac6597f0948.png', '/static/media/aloy.88c94da658a73c2bc26a.png', '/static/media/amber.e6a084025763093c8c20.png', '/static/media/ayaka.1a1863d4175ce915c3d7.png', '/static/media/ayato.308e6b746418f1c2c3b3.png', '/static/media/barbara.1bd9f6f88e5599b4e6fc.png'])
    const [charB, setCharB] = useState(['/static/media/albedo.5bc6986b2ac6597f0948.png', '/static/media/aloy.88c94da658a73c2bc26a.png', '/static/media/amber.e6a084025763093c8c20.png', '/static/media/ayaka.1a1863d4175ce915c3d7.png', '/static/media/ayato.308e6b746418f1c2c3b3.png', '/static/media/barbara.1bd9f6f88e5599b4e6fc.png'])
    let charaList = null
    
    function handleCharaList(e, account, team){
        e.preventDefault()
        setSelectedOption1(account)
        setSelectedOption2(account)
        if(account === 'Kibadda'){
            charaList = importAll(
                require.context('../asset/Kibadda', false, /\.png$/)
            )
            if(team == 'A') setCharA(charaList)
            else if(team === 'B') setCharB(charaList)
        }
        else if(account === 'iScav'){
            charaList = importAll(
                require.context('../asset/iScav', false, /\.png$/)
            )
            if(team == 'A') setCharA(charaList)
            else if(team === 'B') setCharB(charaList)
        }
        else if(account === 'Godoffoy'){
            charaList = importAll(
                require.context('../asset/Godoffoy', false, /\.png$/)
            )
            if(team == 'A') setCharA(charaList)
            else if(team === 'B') setCharB(charaList)
        }
    }

    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState('00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the begining of the variable
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('05:00');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 300);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
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
                     <div>{timer}</div>
            {/* <button onClick={onClickReset}>Reset</button> */}
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
                <div className='dropDown'>
                    <select onChange={e=>handleCharaList(e, e.target.value, 'A')}>
                        {options.map((option) => (
                            <option value={option.value} >{option.label}</option>
                        ))}
                    </select>
                    <select onChange={e=>handleCharaList(e, e.target.value, 'B')}>
                        {options.map((option) => (
                            <option value={option.value} >{option.label}</option>
                        ))}
                    </select>
                </div>
            </div>
            <br></br>

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
                        // allData.map((image, index) => (
                        //     <img src={image} key={characterId[index]} alt="character" onClick={e => (handleSound(e, index), handleChoose(e, image, currentChar), handlePick(e, image, currentChar))}></img>
                        // ))
                        charA.map((image, index) => (
                            <img src={image} key={characterId[index]} alt="character" onClick={e => (handleSound(e, index), handleChoose(e, image, currentChar), handlePick(e, image, currentChar))}></img>
                        ))
                    }
                </div>
                <div className='chooseChar'>
                    {
                        // allData.map((image, index) => (
                        //     <img src={image} key={characterId[index]} alt="character" onClick={e => (handleSound(e, index), handleChoose(e, image, currentChar), handlePick(e, image, currentChar))}></img>
                        // ))
                        charB.map((image, index) => (
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