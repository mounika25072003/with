// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class Cashwithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-container">
          <div className="user-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your">Your Balance</p>
            <p className="balance">
              {balance} <br />
              <span className="curr">In Rupees</span>
            </p>
          </div>
          <p className="with">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(eachDemonination => (
              <DenominationItem
                key={eachDemonination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Cashwithdrawal
