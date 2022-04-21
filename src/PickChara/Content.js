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
        
    const importAll = (r) => {
        return r.keys().map(r);
    };
    
    const allData = importAll(
        require.context("../asset/Character Card", false, /\.png$/)
    )
    const allSound = importAll(
        require.context("../asset/Sound", false, /\.ogg$/)
    )
    const soundId = allSound.map(sound =>(
        (sound.split('/'))[3].split('.')[0].toLowerCase()
    ))
    let soundData = {}
    for(let i=0;i<allSound.length;i++){
        soundData[soundId[i]] = allSound[i]
    }
    function handleSound(e, index, sound){
        e.preventDefault();
        const audio = new Audio(
            sound[index]
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
        { value: 'Select', label:'Select'},
        { value: 'Kibadda', label: 'Kibadda' },
        { value: 'iScav', label: 'iScav' },
        { value: 'Godoffoy', label: 'Godoffoy' },
        { value: 'Juleha', label: 'Juleha' }
      ]
    const [selectedOption1, setSelectedOption1] = useState(options[0]); 
    const [selectedOption2, setSelectedOption2] = useState(options[0]); 
    const [charA, setCharA] = useState(allData)
    const [charB, setCharB] = useState(allData)
    const [soundA, setSoundA] = useState(allSound)
    const [soundB, setSoundB] = useState(allSound)
    const characterIdA =  charA.map(image => (
        (image.split('/'))[3].split('.')[0])
    )
    const characterIdB =  charB.map(image => (
        (image.split('/'))[3].split('.')[0])
    )

    function handleCharaList(e, account, team){
        let charaList = null
        let charaSound = {}
        let filterSoundId = []
        e.preventDefault()
        setSelectedOption1(account)
        setSelectedOption2(account)
        if(account === 'Kibadda'){
            charaList = importAll(
                require.context('../asset/Kibadda', false, /\.png$/)
            )
            for(let i=0;i<charaList.length;i++){
                filterSoundId.push((charaList[i].split('/'))[3].split('.')[0])
            }
            for(let i=0;i<filterSoundId.length;i++){
                charaSound[filterSoundId[i]] = soundData[filterSoundId[i]]
            }

            if(team == 'A'){
                setCharA(charaList)
                setSoundA(charaSound)
            } 
            else if(team === 'B'){
                setCharB(charaList)
                setSoundB(charaSound)
            } 
        }
        else if(account === 'iScav'){
            charaList = importAll(
                require.context('../asset/iScav', false, /\.png$/)
            )
            for(let i=0;i<charaList.length;i++){
                filterSoundId.push((charaList[i].split('/'))[3].split('.')[0])
            }
            for(let i=0;i<filterSoundId.length;i++){
                charaSound[filterSoundId[i]] = soundData[filterSoundId[i]]
            }

            if(team == 'A'){
                setCharA(charaList)
                setSoundA(charaSound)
            } 
            else if(team === 'B'){
                setCharB(charaList)
                setSoundB(charaSound)
            } 
        }
        else if(account === 'Godoffoy'){
            charaList = importAll(
                require.context('../asset/Godoffoy', false, /\.png$/)
            )
            for(let i=0;i<charaList.length;i++){
                filterSoundId.push((charaList[i].split('/'))[3].split('.')[0])
            }
            for(let i=0;i<filterSoundId.length;i++){
                charaSound[filterSoundId[i]] = soundData[filterSoundId[i]]
            }

            if(team == 'A'){
                setCharA(charaList)
                setSoundA(charaSound)
            } 
            else if(team === 'B'){
                setCharB(charaList)
                setSoundB(charaSound)
            } 
        }
        else if(account === 'Juleha'){
            charaList = importAll(
                require.context('../asset/Juleha', false, /\.png$/)
            )
            for(let i=0;i<charaList.length;i++){
                filterSoundId.push((charaList[i].split('/'))[3].split('.')[0])
            }
            for(let i=0;i<filterSoundId.length;i++){
                charaSound[filterSoundId[i]] = soundData[filterSoundId[i]]
            }

            if(team == 'A'){
                setCharA(charaList)
                setSoundA(charaSound)
            } 
            else if(team === 'B'){
                setCharB(charaList)
                setSoundB(charaSound)
            } 
        }
    }
    const [timer, setTimer] = useState(300); // 25 minutes
    const [start, setStart] = useState(false);
    const firstStart = useRef(true);
    const tick = useRef();

    useEffect(() => {
        if (firstStart.current) {
            firstStart.current = !firstStart.current;
            return;
        }

        if (start) {
            tick.current = setInterval(() => {
                setTimer((timer) => timer - 1);
            }, 1000);
        } 
        else {
            clearInterval(tick.current);
        }

        return () => clearInterval(tick.current);
    }, [start]);

    const toggleStart = () => {
        setStart(!start);
    };

    const dispSecondsAsMins = (seconds) => {
        if(seconds >= 0){
            const mins = Math.floor(seconds / 60);
            const seconds_ = seconds % 60;
            return (mins > 9 ? mins: "0" + mins.toString()) + ":" + (seconds_ > 9 ? seconds_ : "0"  + seconds_.toString());
        }
        else if(seconds < 0){
            tick.current = setTimer(0)
        }
    };
    const resetTimer = () => {
        setTimer(300)
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
                     <div>{dispSecondsAsMins(timer)}</div>
                    <button onClick={toggleStart}>
                        {!start ? "START" : "STOP"}
                    </button>
                    <button onClick={resetTimer}>RESET</button>
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
                            <option value={option.value} key={option.label}>{option.label}</option>
                        ))}
                    </select>
                    <select onChange={e=>handleCharaList(e, e.target.value, 'B')}>
                        {options.map((option) => (
                            <option value={option.value} key={option.value}>{option.label}</option>
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
                        charA.map((image, index) => (
                            <img src={image} key={characterIdA[index]} alt="character" onClick={e => (handleSound(e, characterIdA[index], soundA), handleChoose(e, image, currentChar), handlePick(e, image, currentChar))}></img>
                        ))
                    }
                </div>
                <div className='chooseChar'>
                    {
                        charB.map((image, index) => (
                            <img src={image} key={characterIdB[index]} alt="character" onClick={e => (handleSound(e, characterIdB[index], soundB), handleChoose(e, image, currentChar), handlePick(e, image, currentChar))}></img>
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