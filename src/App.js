import './App.css';
import NewsBar from './components/NewsBar/NewsBar';
import News from './components/NewsBar/News';
import Currency from './components/Currency/Currency';
import CurrencyItem from './components/Currency/CurrencyItem';
import SideBlock from './components/SideBlock/SideBlock';
import Search from './components/Search/Search';
import Advert from './components/Advert/Advert';
import WidgetContainer from './components/Widget/WidgenContainer';

// по аналогии news2 new3 etc...
const news = {
  name: 'some news',
  link: '#',
  img: '#',
}

// данные валют
const currency_1 = {
  name: 'USD MOEX',
  value: '63,52',
  diff: '+0,09',
}

const currency_2 = {
  name: 'EUR MOEX',
  value: '70,86',
  diff: '+0,14',
}

const currency_3 = {
  name: 'USD MOEX',
  value: '64,90',
  diff: '+1,63',
}

//часто посещаемые
const popular = [
  {
    link: '#',
    linkText: 'Недвижимость',
    text: ' - о сталинках',
  },
  {
    link: '#',
    linkText: 'Маркет',
    text: ' - люстры и светильники',
  },
  {
    link: '#',
    linkText: 'Авто.ру',
    text: ' - привод 4х4 до 500 000',
  }
]

function App() {
  return (
    <div className="container">
      <NewsBar list={['Сейчас в СМИ', 'В Германии', 'Рекомендуем']}>
        <News {...news}></News>
        <News {...news}></News>
        <News {...news}></News>
        <News {...news}></News>
        <News {...news}></News>
        <Currency>
          <CurrencyItem {...currency_1}></CurrencyItem>
          <CurrencyItem {...currency_2}></CurrencyItem>
          <CurrencyItem {...currency_3}></CurrencyItem>
        </Currency>
      </NewsBar>

      <SideBlock title='Р абота над ошибками' 
                 img='#' 
                 body='Смотрите на Яндекс и запоминайте'>
      </SideBlock>

      <Search menu={['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'Еще']}
              img='#'
              btn='Найти'
              hint='Найдется все. Например,'
              linkHint='фаза луны сегодня'
              link='#'>
      </Search>

      <Advert img='#'
              link={'#'}>
      </Advert>
      
      <WidgetContainer {...popular}></WidgetContainer>
    </div>
  );
}

export default App;
