import React , {useState, useRef, useEffect, Component} from 'react'
import Autocomplete from 'react-autocomplete';
import {Transition} from "react-transition-group";
import './Content.css';
import { Modal} from './Modal.js';
export const Header = () => {
    return (
        <h1>Draft Pick</h1>
    )
  }
  
export const Picked = () => {
    const [isChoose, setIsChoose] = useState()
    const [isPick, setIsPick] = useState()
    const [currentChar, setCurrentChar] = useState()

    const [selectChar1, setSelectChar1] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar2, setSelectChar2] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar3, setSelectChar3] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar4, setSelectChar4] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar5, setSelectChar5] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar6, setSelectChar6] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar7, setSelectChar7] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar8, setSelectChar8] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar9, setSelectChar9] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar10, setSelectChar10] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar11, setSelectChar11] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar12, setSelectChar12] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar13, setSelectChar13] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar14, setSelectChar14] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar15, setSelectChar15] = useState(require('../asset/draft/placeholder_pick.png'))
    const [selectChar16, setSelectChar16] = useState(require('../asset/draft/placeholder_pick.png'))

    const [pickChar1, setpickChar1] = useState(require('../asset/draft/placeholder_picked.png'))
    const [pickChar2, setpickChar2] = useState(require('../asset/draft/placeholder_picked.png'))
    const [pickChar3, setpickChar3] = useState(require('../asset/draft/placeholder_picked.png'))
    const [pickChar4, setpickChar4] = useState(require('../asset/draft/placeholder_picked.png'))
    const [pickChar5, setpickChar5] = useState(require('../asset/draft/placeholder_picked.png'))
    const [pickChar6, setpickChar6] = useState(require('../asset/draft/placeholder_picked.png'))
    const [pickChar7, setpickChar7] = useState(require('../asset/draft/placeholder_picked.png'))
    const [pickChar8, setpickChar8] = useState(require('../asset/draft/placeholder_picked.png'))

    const [inProp1, setInProp1] = useState(false);
    const [inProp2, setInProp2] = useState(false);
    const [inProp3, setInProp3] = useState(false);
    const [inProp4, setInProp4] = useState(false);
    const [inProp5, setInProp5] = useState(false);
    const [inProp6, setInProp6] = useState(false);
    const [inProp7, setInProp7] = useState(false);
    const [inProp8, setInProp8] = useState(false);
    const [inProp9, setInProp9] = useState(false);
    const [inProp10, setInProp10] = useState(false);
    const [inProp11, setInProp11] = useState(false);
    const [inProp12, setInProp12] = useState(false);
    const [inProp13, setInProp13] = useState(false);
    const [inProp14, setInProp14] = useState(false);
    const [inProp15, setInProp15] = useState(false);
    const [inProp16, setInProp16] = useState(false);
    
    const [inProp17, setInProp17] = useState(false);
    const [inProp18, setInProp18] = useState(false);
    const [inProp19, setInProp19] = useState(false);
    const [inProp20, setInProp20] = useState(false);
    const [inProp21, setInProp21] = useState(false);
    const [inProp22, setInProp22] = useState(false);
    const [inProp23, setInProp23] = useState(false);
    const [inProp24, setInProp24] = useState(false);
    const [state, setState] = useState(false);

    const duration = 300;
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`
    };
    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 1 },
    };
        
    const importAll = (r) => {
        return r.keys().map(r);
    };
    
    const allData = importAll(
        require.context("../asset/Char Card", false, /\.png$/)
    )
    const allPortrait = importAll(
        require.context("../asset/Char Potrait Pick", false, /\.png$/)
    )
    const portraitId = allPortrait.map(portrait =>(
        (portrait.split('/'))[3].split('.')[0].toLowerCase()
    ))
    let portraitData = {}
    for(let i=0;i<allPortrait.length;i++){
        portraitData[portraitId[i]] = allPortrait[i]
    }
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
    function handleChoose(e, index, current){
        e.preventDefault();
        let image = portraitData[index]
        if(isChoose){
            if(current == 'Char1') {
                setSelectChar1(image)
                setInProp1(!inProp1)
            }
            else if(current == 'Char2'){
                setSelectChar2(image)
                setInProp2(!inProp2)
            } 
            else if(current == 'Char3'){
                setSelectChar3(image)
                setInProp3(!inProp3)
            } 
            else if(current == 'Char4'){
                setSelectChar4(image)
                setInProp4(!inProp4)
            } 
            else if(current == 'Char5'){
                setSelectChar5(image)
                setInProp5(!inProp5)
            } 
            else if(current == 'Char6'){
                setSelectChar6(image)
                setInProp6(!inProp6)
            } 
            else if(current == 'Char7'){
                setSelectChar7(image)
                setInProp7(!inProp7)
            } 
            else if(current == 'Char8'){
                setSelectChar8(image)
                setInProp8(!inProp8)
            } 
            else if(current == 'Char9'){
                setSelectChar9(image)
                setInProp9(!inProp9)
            } 
            else if(current == 'Char10'){
                setSelectChar10(image)
                setInProp10(!inProp10)
            } 
            else if(current == 'Char11'){
                setSelectChar11(image)
                setInProp11(!inProp11)
            } 
            else if(current == 'Char12'){
                setSelectChar12(image)
                setInProp12(!inProp12)
            } 
            else if(current == 'Char13'){
                setSelectChar13(image)
                setInProp13(!inProp13)
            } 
            else if(current == 'Char14'){
                setSelectChar14(image)
                setInProp14(!inProp14)
            } 
            else if(current == 'Char15'){
                setSelectChar15(image)
                setInProp15(!inProp15)
            } 
            else if(current == 'Char16'){
                setSelectChar16(image)   
                setInProp16(!inProp16)
            } 
        }
    }
    function handlePick(e, image, current){
        e.preventDefault();
        if(isPick){
            if(current == 'Char1'){
                setpickChar1(image)
                setInProp17(!inProp17)
            } 
            else if(current == 'Char2'){
                setpickChar2(image)
                setInProp18(!inProp18)
            } 
            else if(current == 'Char3'){
                setpickChar3(image)
                setInProp19(!inProp19)
            } 
            else if(current == 'Char4'){
                setpickChar4(image)
                setInProp20(!inProp20)
            } 
            else if(current == 'Char5'){
                setpickChar5(image)
                setInProp21(!inProp21)
            } 
            else if(current == 'Char6'){
                setpickChar6(image)
                setInProp22(!inProp22)
            } 
            else if(current == 'Char7'){
                setpickChar7(image)
                setInProp23(!inProp23)
            }   
            else if(current == 'Char8'){
                setpickChar8(image)
                setInProp24(!inProp24)
            } 
        }
    }
    const [valueA, setValueA] = useState('');
    const [valueB, setValueB] = useState('');
    const options = [
        { value: 'Kibadda', label: 'Kibadda' },
        { value: 'iScav', label: 'iScav' },
        { value: 'Godoffoy', label: 'Godoffoy' },
        { value: 'Juleha', label: 'Juleha' }
      ]
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

    function handleCharaList(account, team){
        let charaList = null
        let charaSound = {}
        let filterSoundId = []
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
    const [timer1, setTimer1] = useState(300); // set timer
    const [timer2, setTimer2] = useState(300); 
    const [start1, setStart1] = useState();
    const [start2, setStart2] = useState();
    const [firstStart, setFirstStart] = useState(true)
    const tick1 = useRef();
    const tick2 = useRef();

    useEffect(() => {
        if(firstStart){
            setFirstStart(false)
        }

        if (start1 && !firstStart) {
            tick1.current = setInterval(() => {
                setTimer1((timer1) => timer1 - 1);
            }, 1000);
        } 
        else if(start2 && !firstStart){
            tick2.current = setInterval(() => {
                setTimer2((timer2) => timer2 - 1);
            }, 1000);
        }
        else {
            clearInterval(tick1.current);
            clearInterval(tick2.current);
        }

        return () => (clearInterval(tick1.current), clearInterval(tick2.current));
    }, [start1, start2]);

    const toggleStart = (e, startTeamA, startTeamB, valOpacity1, valOpacity2) => {
        e.preventDefault();
        setStart1(startTeamA);
        setStart2(startTeamB);

        setArrowOpacity1(valOpacity1);
        setArrowOpacity2(valOpacity2);
        if(start1){
            setStart1(false);
            setStart2(true);
        }
        else if(start2){
            setStart1(true);
            setStart2(false);
        }
    };

    const dispSecondsAsMins1 = (seconds) => {
        if(seconds >= 0){
            const mins = Math.floor(seconds / 60);
            const seconds_ = seconds % 60;
            return (mins > 9 ? mins: "0" + mins.toString()) + ":" + (seconds_ > 9 ? seconds_ : "0"  + seconds_.toString());
        }
        else if(seconds < 0){
            tick1.current = setTimer1(0)
        }
    };
    const dispSecondsAsMins2 = (seconds) => {
        if(seconds >= 0){
            const mins = Math.floor(seconds / 60);
            const seconds_ = seconds % 60;
            return (mins > 9 ? mins: "0" + mins.toString()) + ":" + (seconds_ > 9 ? seconds_ : "0"  + seconds_.toString());
        }
        else if(seconds < 0){
            tick2.current = setTimer2(0)
        }
    };
    const resetTimer = () => {
        setTimer1(300)
    }
    const [arrowOpacity1, setArrowOpacity1] = useState(1)
    const [arrowOpacity2, setArrowOpacity2] = useState(1)
    return (
        <>  
            <div className='containerPicked'>
                <div className='teams'>
                    <p>Team 1</p>
                    <p>Team 2</p>
                </div>
                <div className='playerA halfRight halfLeft'>
                    <div className='teamOne'>
                        <Transition in={inProp1} timeout={300}>
                            {(state) => (
                            <img src={selectChar1} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char1', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp2} timeout={300}>
                            {(state) => (
                            <img src={selectChar2} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char2', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp3} timeout={300}>
                            {(state) => (
                            <img src={selectChar3} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char3', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp4} timeout={300}>
                            {(state) => (
                            <img src={selectChar4} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char4', true, false)}/>
                            )}
                        </Transition>
                    </div>
                    
                    <div className='teamTwoA'>
                        <Transition in={inProp5} timeout={300}>
                            {(state) => (
                            <img src={selectChar5} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char5', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp6} timeout={300}>
                            {(state) => (
                            <img src={selectChar6} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char6', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp7} timeout={300}>
                            {(state) => (
                            <img src={selectChar7} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char7', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp8} timeout={300}>
                            {(state) => (
                            <img src={selectChar8} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char8', true, false)}/>
                            )}
                        </Transition>
                    </div>
                </div>
                <div className='timer'>
                    <div>{dispSecondsAsMins1(timer1)}</div>
                    <div className='flipTimer'>
                        <img id='arrowLeft' src={require('../asset/draft/panah_kiri_shadow.png')} style={{opacity: arrowOpacity1}}/>
                        <Flip></Flip>
                        <img id='arrowRight' src={require('../asset/draft/panah_kanan_shadow.png')} style={{opacity: arrowOpacity2}}/>
                    </div>
                    <div>{dispSecondsAsMins2(timer2)}</div>
                    {/* <button onClick={resetTimer}>RESET</button> */}
                </div>
                <div className='playerB halfRight halfLeft'>
                    <div className='teamOne'>
                        <Transition in={inProp9} timeout={300}>
                            {(state) => (
                            <img src={selectChar9} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char9', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp10} timeout={300}>
                            {(state) => (
                            <img src={selectChar10} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char10', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp11} timeout={300}>
                            {(state) => (
                            <img src={selectChar11} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char11', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp12} timeout={300}>
                            {(state) => (
                            <img src={selectChar12} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char12', true, false)}/>
                            )}
                        </Transition>
                    </div>
                    <div className='teamTwoB'>
                        <Transition in={inProp13} timeout={300}>
                            {(state) => (
                            <img src={selectChar13} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char13', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp14} timeout={300}>
                            {(state) => (
                            <img src={selectChar14} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char14', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp15} timeout={300}>
                            {(state) => (
                            <img src={selectChar15} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char15', true, false)}/>
                            )}
                        </Transition>
                        <Transition in={inProp16} timeout={300}>
                            {(state) => (
                            <img src={selectChar16} style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                                }}onClick={e => handleCurrent(e, 'Char16', true, false)}/>
                            )}
                        </Transition>
                    </div>
                </div>
                <div className='teams'>
                    <p>Team 1</p>
                    <p>Team 2</p>
                </div>
                <div className='dropDown'>
                    <p>Picked</p>
                    <div className='autoComplete'>
                        <Autocomplete
                            items={options}
                            shouldItemRender={(item, valueA
                                ) => item.label.toLowerCase()
                                .indexOf(valueA.toLowerCase()) > -1}
                            getItemValue={item => item.value}
                            renderItem={(item, isHighlighted) =>
                                <div style={{
                                    background: isHighlighted ?
                                        '#bcf5bc' : '#f6f4f0',
                                    color: 'black'
                                }}
                                    key={item.label}>
                                    {item.label}
                                </div>
                            }
                            value={valueA}
                            onChange={e=>setValueA(e.target.value)}
                            onSelect={e=>(handleCharaList(e, 'A'), setValueA(e))}
                            inputProps={{
                                style: {
                                    width: '7vw', height: '1vw',
                                    background: '#e4f3f7', 
                                    border: '2px outset lightgray'
                                },
                                placeholder: 'Character List'
                            }}
                        />
                    
                    </div>
                    <div className='autoComplete'>
                        <button className='buttonStart' onClick={e=> toggleStart(e, true,false, 1, 0.2)}>
                            A
                        </button>
                        <button className='buttonStart' onClick={e=> toggleStart(e, false,true, 0.2, 1)}>
                            B
                        </button>
                    </div>
                    <div className='autoComplete'>
                        <Autocomplete
                            items={options}
                            shouldItemRender={(item, valueB
                                ) => item.label.toLowerCase()
                                .indexOf(valueB.toLowerCase()) > -1}
                            getItemValue={item => item.value}
                            renderItem={(item, isHighlighted) =>
                                <div style={{
                                    background: isHighlighted ?
                                        '#bcf5bc' : '#f6f4f0',
                                        color: 'black'
                                }}
                                    key={item.label}>
                                    {item.label}
                                </div>
                            }
                            value={valueB}
                            onChange={e=>setValueB(e.target.value)}
                            onSelect={e=>(handleCharaList(e, 'B'), setValueB(e))}
                            inputProps={{
                                style: {
                                    width: '7vw', height: '1vw',
                                    background: '#e4f3f7', 
                                    border: '2px outset lightgray'
                                },
                                placeholder: 'Character List'
                            }}
                        />
                    </div>
                <p>Picked</p>
                </div>
            </div>
            <br></br>

            <div className='containerChoose'>
                <div className='pickedChar'>
                    <Transition in={inProp17} timeout={300}>
                        {(state) => (
                        <img src={pickChar1} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                            }}onClick={e => handleCurrent(e, 'Char1', false, true)}/>
                        )}
                    </Transition>
                    <Transition in={inProp18} timeout={300}>
                        {(state) => (
                        <img src={pickChar2} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                            }}onClick={e => handleCurrent(e, 'Char2', false, true)}/>
                        )}
                    </Transition>
                    <Transition in={inProp19} timeout={300}>
                        {(state) => (
                        <img src={pickChar3} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                            }}onClick={e => handleCurrent(e, 'Char3', false, true)}/>
                        )}
                    </Transition>
                    <Transition in={inProp20} timeout={300}>
                        {(state) => (
                        <img src={pickChar4} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                            }}onClick={e => handleCurrent(e, 'Char4', false, true)}/>
                        )}
                    </Transition>
                </div>
                <div className='chooseChar'>
                    {
                        charA.map((image, index) => (
                            <img src={image} key={characterIdA[index]} alt="character" onClick={e => (handleSound(e, characterIdA[index], soundA), handleChoose(e, characterIdA[index], currentChar), handlePick(e, image, currentChar), toggleStart(e, true,false, 0.2, 1))}></img>
                        ))
                    }
                </div>
                <div className='chooseChar'>
                    {
                        charB.map((image, index) => (
                            <img src={image} key={characterIdB[index]} alt="character" onClick={e => (handleSound(e, characterIdB[index], soundB), handleChoose(e, characterIdB[index], currentChar), handlePick(e, image, currentChar), toggleStart(e, false,true, 1, 0.2))}></img>
                        ))
                    }
                </div>
                <div className='pickedChar'>
                    <Transition in={inProp21} timeout={300}>
                        {(state) => (
                        <img src={pickChar5} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                            }}onClick={e => handleCurrent(e, 'Char5', false, true)}/>
                        )}
                    </Transition>
                    <Transition in={inProp22} timeout={300}>
                        {(state) => (
                        <img src={pickChar6} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                            }}onClick={e => handleCurrent(e, 'Char6', false, true)}/>
                        )}
                    </Transition>
                    <Transition in={inProp23} timeout={300}>
                        {(state) => (
                        <img src={pickChar7} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                            }}onClick={e => handleCurrent(e, 'Char7', false, true)}/>
                        )}
                    </Transition>
                    <Transition in={inProp24} timeout={300}>
                        {(state) => (
                        <img src={pickChar8} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                            }}onClick={e => handleCurrent(e, 'Char8', false, true)}/>
                        )}
                    </Transition>
                </div>
            </div>
        </>
    )
}

class Flip extends Component{
    constructor(){
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
    };
    render() {
        return (
          <main>
            <Modal show={this.state.show} handleClose={this.hideModal}>
            </Modal>
                <img id='logoMid' onClick={this.showModal} src={require('../asset/draft/logo.png')}/>
          </main>
        );
    }
}