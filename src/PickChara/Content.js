import React from 'react'
import Countdown from 'react-countdown';
import './Content.css';

export const Header = () => {
    return (
      <h1>WARNET</h1>
    // <img src={require('../asset/logo_warnet.png')}></img>
    )
  }

  
export const Picked = () => {
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
                    <img src={require('../asset/Character Card/albedo.png')}></img>
                    <img src={require('../asset/Character Card/ayato.png')}></img>
                    <img src={require('../asset/Character Card/barbara.png')}></img>
                    <img src={require('../asset/Character Card/klee.png')}></img>
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

export const Choose = () =>{
    const importAll = (r) => {
        return r.keys().map(r);
      };
      
      const allData = importAll(
        require.context("../asset/Character Card", false, /\.png$/)
      )
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
                    allData.map(image => (
                        <img src={image} key={(image.split('/'))[3].split('.')[0]} alt="character"></img>
                    ))
                }
            </div>
            <div className='chooseChar'>
                {
                    allData.map(image => (
                        <img src={image} key={(image.split('/'))[3].split('.')[0]} alt="character"></img>
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