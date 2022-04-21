import React from 'react';
import './Modal.css';

export const Modal = ({ handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    function handle(){

    }
    return(
        <>
            <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <div className="containerModal">
                <Coin></Coin>
                <button type="button" onClick={handleClose}>
                    Cancel
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
    coinToss() {
      this.setState({ nader: "" }, () => {
        if (Math.random() < 0.5) {
          this.setState({ result: "heads" });
        } else {
          this.setState({ result: "tails" });
        }
      });
    }
  
    render() {
      return (
        <div className="App">
            <br></br>
          <div id="coin" className={this.state.result} key={+new Date()}>
            <div class="side-a">
              <h2>TAIL</h2>
            </div>
            <div className="side-b">
              <h2>HEAD</h2>
            </div>
          </div>
          <div className='modalButton'>
            <h1>Flip a coin</h1>
            <button id="btn" onClick={this.coinToss}>
                Coin Toss
            </button>
          </div>
          <br></br>
          <br></br>
        </div>
      );
    }
  }
  
  export default Coin;