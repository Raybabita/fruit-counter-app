// Write your code here
import {Component} from 'react'
import './index.css'

class FruitCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onBananaIncrement = () => {
    this.setState(preState => ({bananaCount: preState.bananaCount + 1}))
  }

  onMangoIncrement = () => {
    this.setState(preState => ({mangoCount: preState.mangoCount + 1}))
  }

  render() {
    const {bananaCount, mangoCount} = this.state
    return (
      <div className="app-container">
        <div className="fruits-counter-container">
          <h1 className="count-text">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count"> {bananaCount}</span> bananas
          </h1>
          <div className="counter-control-container">
            <div className="counter-control">
              <img
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <div>
                <button
                  className="btn"
                  onClick={this.onMangoIncrement}
                  alt="mango"
                  type="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <div>
                <button
                  className="btn"
                  onClick={this.onBananaIncrement}
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
