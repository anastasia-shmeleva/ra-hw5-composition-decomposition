import shortid from "shortid";
import Tab from "./Tab";

//верхний блок новостей
const NewsBar = props => {
  return (
    <div className='news__container'>
      <div className='news__header'>
        <ul className='tabs'>{
          props.list.map((el) => { 
            return <Tab key={shortid.generate()}>{el}</Tab> 
          })
        }</ul>
        <div className='current-date'>{Date()}</div>
      </div>
      <ul className='news__list'>{props.children}</ul>
    </div>
  )
}

export default NewsBar;