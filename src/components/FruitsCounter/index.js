// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMango = () => {
    this.setState(prevState => {
      console.log('mango')
      return {mangoCount: prevState.mangoCount + 1}
    })
  }

  onBanana = () => {
    this.setState(prevState => {
      console.log('banana')
      return {bananaCount: prevState.bananaCount + 1}
    })
  }

  render() {
    const {bananaCount, mangoCount} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span>{mangoCount}</span> mangoes <span>{bananaCount}</span>{' '}
            bananas
          </h1>
          <div className="fruits-card">
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="button" type="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="button" type="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
