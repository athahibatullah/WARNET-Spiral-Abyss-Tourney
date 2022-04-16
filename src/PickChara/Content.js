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
  localStorage.setItem('Chara1', '/static/media/albedo.5bc6986b2ac6597f0948.png');
  let Chara1 = localStorage.getItem('Chara1')
  
export const Picked = () => {
    // const importAll = (r) => {
    //     return r.keys().map(r);
    //   };
      
    // const allData = importAll(
    //     require.context("../asset/Character Card", false, /\.png$/)
    // )
    // console.log(allData)
    // const [selectChar, setSelectChar] = useState(Chara1)
    const renderer = props => {
        return (
            <div>
                {props.formatted.minutes}:{props.formatted.seconds}
            </div>
        );
      };
    return (
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
                    <img src={Chara1} onClick={e => Choose('Chara1')}/>
                    <img src={require('../asset/question.png')}/>
                    <img src={require('../asset/question.png')}/>
                    <img src={require('../asset/question.png')}/>
                </div>
                
                <div className='teamTwoA'>
                    <img src={require('../asset/Character Card/venti.png')}></img>
                    <img src={require('../asset/Character Card/ganyu.png')}></img>
                    <img src={require('../asset/Character Card/kokomi.png')}></img>
                    <img src={require('../asset/Character Card/diona.png')}></img>
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
    )
}
export const Choose = (cos) =>{
    console.log(cos)
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
    function handleChoose(e, image, chosen){
        e.preventDefault();
        localStorage.setItem('Chara1', image)
    }
    return (
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
                        <img src={image} key={characterId[index]} alt="character" onClick={e => (handleSound(e, index), handleChoose(e, image, 'Chara1'))}></img>
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
    )
}