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
            <div className='playerA'>
                <div className='teamOne'>
                    <img src={require('../asset/Character Card/albedo_face.png')}></img>
                    <img src={require('../asset/Character Card/ayato_face.png')}></img>
                    <img src={require('../asset/Character Card/barbara_face.png')}></img>
                    <img src={require('../asset/Character Card/klee_face.png')}></img>
                </div>
                <div className='teamTwo'>
                    <img src={require('../asset/Character Card/venti_face.png')}></img>
                    <img src={require('../asset/Character Card/ganyu_face.png')}></img>
                    <img src={require('../asset/Character Card/kokomi_face.png')}></img>
                    <img src={require('../asset/Character Card/diona_face.png')}></img>
                </div>
            </div>
            <div className='timer'>
                <div>
                {/* <Countdown
                    date={Date.now() + 5*60000}
                    intervalDelay={0}
                    renderer={renderer}
                    zeroPadTime={2}
                /> */}
                    00:00
                </div>
            </div>
            <div className='playerB'>
                <div className='teamOne'>
                    <img src={require('../asset/Character Card/mona_face.png')}></img>
                    <img src={require('../asset/Character Card/ayaka_face.png')}></img>
                    <img src={require('../asset/Character Card/kazuha_face.png')}></img>
                    <img src={require('../asset/Character Card/diona_face.png')}></img>
                </div>
                <div className='teamTwo'>
                    <img src={require('../asset/Character Card/eula_face.png')}></img>
                    <img src={require('../asset/Character Card/shougun_face.png')}></img>
                    <img src={require('../asset/Character Card/rosaria_face.png')}></img>
                    <img src={require('../asset/Character Card/zhongli_face.png')}></img>
                </div>
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
            <div className='pickedChar'>
                <img src={require('../asset/Character Card/mona_face.png')}></img>
                <img src={require('../asset/Character Card/ayaka_face.png')}></img>
                <img src={require('../asset/Character Card/kazuha_face.png')}></img>
                <img src={require('../asset/Character Card/diona_face.png')}></img>
            </div>
            <div className='chooseChar'>
                {
                    allData.map(image => (
                        <img src={image}></img>
                    ))
                }
            </div>
            <div className='chooseChar'>
                {
                    allData.map(image => (
                        <img src={image}></img>
                    ))
                }
            </div>
            <div className='pickedChar'>
                <img src={require('../asset/Character Card/mona_face.png')}></img>
                <img src={require('../asset/Character Card/ayaka_face.png')}></img>
                <img src={require('../asset/Character Card/kazuha_face.png')}></img>
                <img src={require('../asset/Character Card/diona_face.png')}></img>
            </div>
        </div>
    )
}