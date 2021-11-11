import shortid from "shortid";
import MenuItem from "./MenuItem";

// блок меню в поиске
const Menu = props => {
  return (
    <div className='search__menu'>
      {props.children.map(item => <MenuItem key={shortid.generate()}>{item}</MenuItem>)}
    </div>     
  )
}

export default Menu;