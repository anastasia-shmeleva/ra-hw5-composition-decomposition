// реклама под строкой поиска
const Advert = props => {
  return (
    <div className='advert__container'>
      <p>
        <a href={props.link}>
        <img src={props.img} alt='ad__img'/>
        </a>
      </p>
    </div>
  )
}

export default Advert;