import Menu from './Menu';

// центральный блок поиска
const Search = props => {
  return (
    <div className='search__container'>
      <img src={props.img} alt='search__icon' />
      <div className='search__body'>
       <Menu>{props.menu}</Menu>
        <input type="text" />
        <button className='search__button'>{props.btn}</button>
      </div>
      <div className='search__hint'>
        {props.hint}
        <a href={props.link}>{props.linkHint}</a>
      </div>
    </div>
  )
}

export default Search;