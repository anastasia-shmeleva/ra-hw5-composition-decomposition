//блок с валютой в блоке курса валют
const CurrencyItem = props => {
  return (
    <div className='currency__item'>
      <div>{props.name}</div>
      <div>{props.value}</div>
      <div>{props.diff}</div>
    </div>
  )
}

export default CurrencyItem;