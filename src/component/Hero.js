import React, { Component } from 'react';
import axios from 'axios';

 class Hero extends Component {

  state = {
    advice: ''
  };

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
      const {advice} = response.data.slip;
      this.setState({advice})
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  
  render() {
    const {advice} = this.state
    return (
      <div className="hero-container">
        <div className="advice-card">
            <h2 className="advice-head">{advice}</h2>
            <button className='btn' onClick={this.fetchAdvice}><span>Advice more</span></button>
        </div>
      </div>
    )
  }
}
export default Hero;