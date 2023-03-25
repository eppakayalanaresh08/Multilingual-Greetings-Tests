import './index.css'

const EachGreeting = props => {
  const {eachObjectList, onClickEachButton, isActive} = props
  const {buttonText, id} = eachObjectList
  const styledText = isActive && 'button-text'

  const onClickButtonText = () => {
    onClickEachButton(id)
  }
  return (
    <li className="list-item">
      <button
        type="button"
        onClick={onClickButtonText}
        className={`${styledText} button-style`}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default EachGreeting
