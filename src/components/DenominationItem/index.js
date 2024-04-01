// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, updateBalance} = props
  const {value} = denominationsList

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="item">
      <button
        type="button"
        className="den-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
