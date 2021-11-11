//блок работы над ошибками
const SideBlock = props => {
  return (
    <li className='side-block'>
      <img src={props.img} className='side-block__img' alt={props.title}/>
      <h5 className='side-block__title'>{props.title}</h5>
      <span className='side-block__body'>{props.body}</span>
    </li>
  )
}

export default SideBlock;