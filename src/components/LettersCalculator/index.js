// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: ''}

  onChangeInput = event => {
    const inputText = event.target.value
    this.setState({lettersCount: inputText})
  }

  render() {
    const {lettersCount} = this.state
    const count = lettersCount.length
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input-text" className="phrase">
            Enter the phrase
          </label>
          <input
            type="text"
            id="input-text"
            className="input"
            placeholder="Enter the phrase"
            onChange={this.onChangeInput}
          />
          <p className="count-container">No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
