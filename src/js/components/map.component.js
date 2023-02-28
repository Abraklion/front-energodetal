import Component from "../core/component";

import Functions from "../core/functions";

/**
 *  Отложено подгружает карту на сайт
 * */
export default class MapComponent extends Component {

  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id,options) {

    super(id,options);

    this.currentPosition = Functions.getCoords(document.querySelector('.gallery')) - 87

    this.init()
  }

  /**
   * Интерфейс компонента
   * @return {this}
   */
  init() {
    this._rendering()

    window.addEventListener('scroll', this._scrollHandler)
  }

  /**
   * Задаем стили и атрибуты
   * @return {void}
   */
  _rendering() {
    this.$el.classList.add('contacts__map')
    this.$el.src = 'https://yandex.ru/map-widget/v1/?ll=56.054194%2C54.900934&mode=whatshere&whatshere%5Bpoint%5D=56.054056%2C54.900886&whatshere%5Bzoom%5D=17&z=18.95';
    this.$el.title = 'Карта местоположения ПТО "ЭНЕРГОДЕТАЛЬ"'
    this.$el.width = '500'
    this.$el.height = '305'
  }

  /**
   * Обработчик прокрутки страницы
   * @return {void}
   */
  _scrollHandler = () => {

    if (pageYOffset > this.currentPosition) {

      document.querySelector('.js-parent-map').append(this.$el);

      window.removeEventListener('scroll', this._scrollHandler)
    }
  }
}
