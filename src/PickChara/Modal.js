import React from 'react';
import './Modal.css';

export const Modal = ({ handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return(
        <>
            <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <div className="containerModal">
                <Coin></Coin>
                <button type="button" onClick={handleClose}>
                    Done
                </button><br></br>
                </div>
            </section>
            </div>
        </>
    )
}
class Coin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        result: "",
        nader: "nader"
      };
      this.coinToss = this.coinToss.bind(this);
    }
    coinToss(tossNow) {
      if(tossNow){
        this.setState({ nader: "" }, () => {
          if (Math.random() < 0.5) {
            this.setState({ result: "heads" });
          } else {
            this.setState({ result: "tails" });
          }
        }); 
      }
      else{
        this.setState({ nader: "nader" }, () => {
          this.setState({ result: "" });
        });
      }
    }
  
    render() {
      return (
        <div className="App">
            <br></br>
          <div id="coin" className={this.state.result} key={+new Date()}>
            <div class="side-a">
              <img src={require('../asset/draft/coinB.png')}/>
            </div>
            <div className="side-b">
              <img src={require('../asset/draft/coinA.png')}/>
            </div>
          </div>
          <div className='modalButton'>
            <h1>Flip a coin</h1>
            <button id="btn" onClick={() => this.coinToss(true)}>
                Flip
            </button>
            <button type="button" onClick={() => (this.coinToss(false))}>
                Reset
            </button><br></br>
          </div>
          <br></br>
          <br></br>
        </div>
      );
    }
  }
  
  export default Coin;