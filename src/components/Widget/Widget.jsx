//виджет нижнего блока
const Widget = props => {
  return (
    <div className='widget'>
      <div className='widget__title'>{props.title}</div>
      <div className='widget__body'>{props.children}</div>
    </div>
  )
}

export default Widget;