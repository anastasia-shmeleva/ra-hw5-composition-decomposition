/* eslint-disable jsx-a11y/anchor-is-valid */

//новость
const News = props => {
  return (
    <li className='news__item'>
      <img src={props.img} className='news__img' alt='news'/>
      <a href={props.link}>{props.name}</a>
    </li>
  )
}

export default News;