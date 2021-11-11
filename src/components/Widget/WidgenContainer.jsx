import shortid from "shortid";
import Widget from "./Widget";

//нижний контейнер с виджетами
const WidgetContainer = props => {
  return (
    <div className='widget__container'>
      <Widget title='Погода'>
        <div>
          <img src="#" alt='weather'/>
        </div>
      </Widget>

      <Widget title='Карта Германии'>Расписания</Widget>

      <Widget title='Посещаемое' >
        {/* {console.log(props)} */}
        {Object.values(props).map(item => {
          return (
            <p className='widget__item' key={shortid.generate()}>
              <a href={item.link}>{item.linkText}</a>
              {item.text}
            </p>
          )
        })}
      </Widget>

      <Widget title='Телепрограмма'>
        <p>
          <span>02:00 THT.Best</span>
          <span>THT International</span>
        </p>
        <p>
          <span>02:15 Джинглики</span>
          <span>Карусель INT</span>
        </p>
        <p>
          <span>02:25 Наедине со всеми</span>
          <span>Первый</span>
        </p>
      </Widget>
      
      <Widget title='Эфир'>
        <p>
          <span>Управление как искусство</span>
          <span>Успех</span>
        </p>
        <p>
          <span>Ночь. Мир в это время</span>
          <span>earthTV</span>
        </p>
        <p>
          <span>Андрей Возн..</span>
          <span>Совершенно секретно</span>
        </p>
      </Widget>

    </div>
  )
}

export default WidgetContainer;
