import * as React from 'react';
import { DefaultLayout } from '../../../components/DefaultLayout';

import { YandexMetrika } from '../../../components/YandexMetrika';
import { MailRu } from '../../../components/MailRu';
import { TikTok } from '../../../components/TikTok';
import { VKPixel } from '../../../components/VKPixel';
import { AdvCake } from '../../../components/AdvCake';

import { GetCourseWidget } from '../../../components/GetCourseWidget';

import { HeaderLogoAndTel } from '../../../components/HeaderLogoAndTel';
import { TextReviewsNew } from '../../../components/TextReviewsNew';
import { AdvanceRocket } from '../../../components/AdvanceRocket';
import { ExpertLicenses } from '../../../components/ExpertLicenses';
import { Licenses } from '../../../components/Licenses';
import { FooterFull } from '../../../components/FooterFull';

import * as main from './styles/main.module.scss';
import * as hero from './styles/hero.module.scss';
import * as targetAudience from './styles/targetAudience.module.scss';
import * as aboutWorkshop from './styles/aboutWorkshop.module.scss';
import * as lessons from './styles/lessons.module.scss';
import * as program from './styles/program.module.scss';
import * as teacher from './styles/teacher.module.scss';
import * as reviews from './styles/reviews.module.scss';
import * as registration from './styles/registration.module.scss';
import * as ourLicenses from './styles/ourLicenses.module.scss';

import expertLicenses from '../../../components/ExpertLicenses/data/expertLicenses.json';
import licenses from '../../../components/Licenses/data/licenses.json';
import reviewsData from './data/reviewsData.json';

const Hero = () => {
  return (
    <section className={hero.hero}>
      <div className={'container'}>
        <HeaderLogoAndTel />
        <div className={hero.hero__info}>
          <span className={hero.hero__bage}>Онлайн-тренинг</span>
          <h1 className={hero.hero__title}>Любой иностранный за&nbsp;месяц</h1>
          <p className={hero.hero__text}>
            С&nbsp;нуля до&nbsp;разговора на&nbsp;бытовые темы с&nbsp;помощью методики преподавателя 4-х иностранных
            языков
          </p>
          <div className={hero.hero__btns}>
            <a className={`${hero.hero__btn} ${hero.hero__btnMain}`} href={'#reg'}>
              Оставить заявку
            </a>
            <a className={`${hero.hero__btn} ${hero.hero__btnSimple}`} href={'#program'}>
              Смотреть программу
            </a>
          </div>
          <picture className={hero.hero__img}>
            <source
              srcSet={'https://fs.advance.ru/landing-pages/course/lyuboy_inostrannyi_za_mesyac/bg-lubim-320.png'}
              media={'(max-width: 480px)'}
            />
            <img
              src="https://fs.advance.ru/landing-pages/course/lyuboy_inostrannyi_za_mesyac/bg-lubim-1920.png"
              alt={'Обложка'}
            />
          </picture>
          <ul className={hero.hero__details}>
            <li className={`${hero.hero__detailsItem} ${hero.hero__detailsItemOne}`}>
              Более 30&nbsp;часов
              <br />
              практики
            </li>
            <li className={`${hero.hero__detailsItem} ${hero.hero__detailsItemTwo}`}>
              7&nbsp;занятий
              <br />
              с&nbsp;домашними
              <br />
              заданиями
            </li>
            <li className={`${hero.hero__detailsItem} ${hero.hero__detailsItemThree}`}>
              Поддержка
              <br />
              преподавателя курса и&nbsp;кураторов 24/7
            </li>
            <li className={`${hero.hero__detailsItem} ${hero.hero__detailsItemFour}`}>
              Общий чат
              <br />
              учеников
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  return (
    <section className={targetAudience.targetAudience}>
      <div className={'container'}>
        <h4 className={targetAudience.targetAudience__title}>Онлайн-тренинг для вас, если&nbsp;вы:</h4>
        <div className={targetAudience.targetAudience__wrap}>
          <div className={`${targetAudience.targetAudience__item} ${targetAudience.targetAudience__itemOne}`}>
            <span className={targetAudience.targetAudience__text}>только начали учить иностранный язык</span>
          </div>
          <div className={`${targetAudience.targetAudience__item} ${targetAudience.targetAudience__itemTwo}`}>
            <span className={targetAudience.targetAudience__text}>
              убеждены, что для результата необходимо потратить годы
            </span>
          </div>
          <div className={`${targetAudience.targetAudience__item} ${targetAudience.targetAudience__itemThree}`}>
            <span className={targetAudience.targetAudience__text}>
              в&nbsp;поиске методики быстрого и&nbsp;качественного обучения
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutWorkshop = () => {
  return (
    <section className={aboutWorkshop.aboutWorkshop}>
      <div className={'container'}>
        <div className={aboutWorkshop.aboutWorkshop__wrap}>
          <div className={aboutWorkshop.aboutWorkshop__info}>
            <h4 className={aboutWorkshop.aboutWorkshop__title}>На&nbsp;онлайн-тренинге вы:</h4>
            <ul>
              <li className={aboutWorkshop.aboutWorkshop__item}>
                освоите методику изучения любого языка до&nbsp;базового уровня за&nbsp;30&nbsp;дней;
              </li>
              <li className={aboutWorkshop.aboutWorkshop__item}>
                c&nbsp;нуля до&nbsp;разговора на&nbsp;бытовые темы: погода и&nbsp;времена года, страны
                и&nbsp;путешествия, хобби и&nbsp;свободное время, одежда, еда и&nbsp;не&nbsp;только;
              </li>
              <li className={aboutWorkshop.aboutWorkshop__item}>
                выучите более 2&nbsp;000 новых иностранных слов или иероглифов в&nbsp;1&nbsp;из&nbsp;9&nbsp;языков:
                английский, испанский, итальянский, немецкий, французский, китайский, корейский, японский или хинди;
              </li>
              <li className={aboutWorkshop.aboutWorkshop__item}>научитесь понимать иностранную речь на&nbsp;слух;</li>
              <li className={aboutWorkshop.aboutWorkshop__item}>
                сможете общаться с&nbsp;иностранцами без русского акцента;
              </li>
              <li className={aboutWorkshop.aboutWorkshop__item}>
                сможете пройти интервью и&nbsp;составлять письма, сообщения, инструкции на&nbsp;иностранном языке.
              </li>
            </ul>
          </div>

          <div className={aboutWorkshop.aboutWorkshop__img}></div>
        </div>
      </div>
    </section>
  );
};

const Lessons = () => {
  return (
    <section className={lessons.lessons}>
      <div className={'container'}>
        <ul className={lessons.lessons__list}>
          <li className={lessons.lessons__item}>
            <div className={lessons.lessons__imgCover}>
              <img
                src="https://fs.advance.ru/landing-pages/course/lyuboy_inostrannyi_za_mesyac/zanyatie-01.png"
                alt={'Занятие 1'}
              />
            </div>
            <div className={lessons.lessons__descr}>
              <p className={`${lessons.lessons__text} ${lessons.lessons__textBold} ${lessons.lessons__textMargin}`}>
                Поставите цель и&nbsp;сформируете маршрут изучения языка.
              </p>
              <p className={lessons.lessons__text}>
                Научитесь подробно планировать программу самостоятельного изучения иностранного языка.
              </p>
            </div>
          </li>

          <li className={lessons.lessons__item}>
            <div className={lessons.lessons__imgCover}>
              <img
                src="https://fs.advance.ru/landing-pages/course/lyuboy_inostrannyi_za_mesyac/zanyatie-02.png"
                alt={'Занятие 2'}
              />
            </div>
            <div className={lessons.lessons__descr}>
              <p className={`${lessons.lessons__text} ${lessons.lessons__textBold} ${lessons.lessons__textMargin}`}>
                Получите алгоритм отработки фонетики и&nbsp;запоминания транскрипций.
              </p>
              <p className={lessons.lessons__text}>
                Сможете самостоятельно изучать фонетику любого языка, а&nbsp;также научитесь читать.
              </p>
            </div>
          </li>

          <li className={lessons.lessons__item}>
            <div className={lessons.lessons__imgCover}>
              <img
                src="https://fs.advance.ru/landing-pages/course/lyuboy_inostrannyi_za_mesyac/zanyatie-03.png"
                alt={'Занятие 3'}
              />
            </div>
            <div className={lessons.lessons__descr}>
              <p className={lessons.lessons__text}>
                <span className={lessons.lessons__textBold}>
                  Освоите технику запоминания 100 иностранных слов за&nbsp;1&nbsp;час
                </span>{' '}
                и&nbsp;отработаете ее&nbsp;на&nbsp;практике, выучив более 2&nbsp;000 слов за&nbsp;весь тренинг.
              </p>
            </div>
          </li>

          <li className={lessons.lessons__item}>
            <div className={lessons.lessons__imgCover}>
              <img
                src="https://fs.advance.ru/landing-pages/course/lyuboy_inostrannyi_za_mesyac/zanyatie-04.png"
                alt={'Занятие 4'}
              />
            </div>
            <div className={lessons.lessons__descr}>
              <p className={`${lessons.lessons__text} ${lessons.lessons__textBold}`}>
                Сможете с&nbsp;легкостью запоминать абстрактные слова, глаголы, наречия и&nbsp;прилагательные.
              </p>
            </div>
          </li>

          <li className={lessons.lessons__item}>
            <div className={lessons.lessons__imgCover}>
              <img
                src="https://fs.advance.ru/landing-pages/course/lyuboy_inostrannyi_za_mesyac/zanyatie-05.png"
                alt={'Занятие 5'}
              />
            </div>
            <div className={lessons.lessons__descr}>
              <p className={`${lessons.lessons__text} ${lessons.lessons__textBold}`}>
                Научитесь сохранять новую информацию в&nbsp;долговременной памяти и&nbsp;правильно повторять&nbsp;ее.
              </p>
            </div>
          </li>

          <li className={lessons.lessons__item}>
            <div className={lessons.lessons__imgCover}>
              <img
                src="https://fs.advance.ru/landing-pages/course/lyuboy_inostrannyi_za_mesyac/zanyatie-06.png"
                alt={'Занятие 6'}
              />
            </div>
            <div className={lessons.lessons__descr}>
              <p className={`${lessons.lessons__text} ${lessons.lessons__textBold} ${lessons.lessons__textMargin}`}>
                Составите майнд-карты для изучения грамматики, а&nbsp;также освоите паттерны для постановки навыка
                разговора.
              </p>
              <p className={lessons.lessons__text}>
                Выведите слова и&nbsp;грамматику в&nbsp;разговорный навык (с&nbsp;помощью паттернов со&nbsp;скоростью
                1500-2000 фраз в&nbsp;час).
              </p>
            </div>
          </li>

          <li className={lessons.lessons__item}>
            <div className={lessons.lessons__imgCover}>
              <img
                src="https://fs.advance.ru/landing-pages/course/lyuboy_inostrannyi_za_mesyac/zanyatie-07.png"
                alt={'Занятие 7'}
              />
            </div>
            <div className={lessons.lessons__descr}>
              <p className={`${lessons.lessons__text} ${lessons.lessons__textBold} ${lessons.lessons__textMargin}`}>
                Освоите навык письма и&nbsp;понимания на&nbsp;слух.
              </p>
              <p className={lessons.lessons__text}>
                Устраните раз и&nbsp;навсегда все ошибки в&nbsp;произношении и&nbsp;написании слов.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

const Program = () => {
  return (
    <section className={program.program} id={'program'}>
      <div className={'container'}>
        <h2 className={program.program__title}>Программа онлайн-тренинга</h2>
        <div className={program.program__wrap}>
          <div className={`${program.program__card} ${program.program__cardOne}`}>
            <h3 className={program.program__subtitle}>Работа с&nbsp;вашим языком и&nbsp;вашими темами</h3>
            <ul className={program.program__list}>
              <li className={program.program__item}>Мы&nbsp;построим ваш индивидуальный образовательный маршрут</li>
              <li className={program.program__item}>Теория любого языка</li>
              <li className={program.program__item}>Как подобрать материалы для самостоятельной отработки</li>
              <li className={program.program__item}>
                Майнд-карты вместо разговорника: как составить список необходимых слов с&nbsp;помощью майнд-карты
              </li>
              <li className={program.program__item}>Как поддерживать мотивацию при изучении языка</li>
            </ul>
          </div>

          <div className={`${program.program__card} ${program.program__cardTwo}`}>
            <h3 className={program.program__subtitle}>
              Звуки и&nbsp;буквы:
              <br />
              как учить?
            </h3>
            <ul className={program.program__list}>
              <li className={program.program__item}>Как читать на&nbsp;иностранном языке</li>
              <li className={program.program__item}>
                Как правильно произносить иностранные слова, особенности местных акцентов
              </li>
              <li className={program.program__item}>Как избавиться от&nbsp;акцента</li>
              <li className={program.program__item}>Как быстро запомнить все транскрипционные знаки</li>
              <li className={program.program__item}>Как выучить алфавит</li>
            </ul>
          </div>

          <div className={`${program.program__card} ${program.program__cardThree}`}>
            <h3 className={program.program__subtitle}>Слова&nbsp;&mdash; запоминаем 100 слов в&nbsp;час:</h3>
            <ul className={program.program__list}>
              <li className={program.program__item}>Как быстро запоминать иностранные слова без зубрёжки</li>
              <li className={program.program__item}>Как учить разные части речи</li>
              <li className={program.program__item}>Как помнить все выученные слова</li>
              <li className={program.program__item}>Программы для удобного повторения слов</li>
            </ul>
          </div>

          <div className={`${program.program__card} ${program.program__cardFour}`}>
            <h3 className={program.program__subtitle}>Грамматика и&nbsp;навык разговора</h3>
            <ul className={program.program__list}>
              <li className={program.program__item}>Как понять грамматику с&nbsp;помощью майнд-карт</li>
              <li className={program.program__item}>В&nbsp;каком порядке изучать грамматику</li>
              <li className={program.program__item}>
                Как заговорить без учебников на&nbsp;иностранном языке через месяц (паттерны и&nbsp;правила
                их&nbsp;составления)
              </li>
            </ul>
          </div>

          <div className={`${program.program__card} ${program.program__cardFive}`}>
            <h3 className={program.program__subtitle}>Письменная речь и&nbsp;понимание на&nbsp;слух</h3>
            <ul className={program.program__list}>
              <li className={program.program__item}>Как писать без ошибок</li>
              <li className={program.program__item}>Как научиться писать иероглифами и&nbsp;вязью</li>
              <li className={program.program__item}>Как понимать речь на&nbsp;иностранном языке</li>
              <li className={program.program__item}>Как смотреть видео на&nbsp;иностранном языке без субтитров</li>
            </ul>
          </div>

          <div className={`${program.program__card} ${program.program__cardSix}`}>
            <h3 className={program.program__subtitle}>Упражнения для улучшения работы мозга</h3>
            <ul className={program.program__list}>
              <li className={program.program__item}>Пальцевая гимнастика</li>
              <li className={program.program__item}>Техники для улучшения концентрации внимания</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Teacher = () => {
  return (
    <section className={teacher.teacher}>
      <div className={'container'}>
        <div className={teacher.teacher__wrap}>
          <div className={teacher.teacher__img}>
            <img
              src={'https://fs.advance.ru/landing-pages/course/lyuboy_inostrannyi_za_mesyac/EL.png'}
              alt={'Преподаватель Елена Лебедева'}
            />
          </div>

          <div className={teacher.teacher__info}>
            <h2 className={teacher.teacher__title}>Преподаватель</h2>
            <h3 className={teacher.teacher__subtitle}>Елена Лебедева</h3>
            <ul>
              <li className={teacher.teacher__item}>Эксперт по&nbsp;технологиям обучения и&nbsp;изучения языков</li>
              <li className={teacher.teacher__item}>Разработчик флагманских курсов Advance</li>
              <li className={teacher.teacher__item}>Методист онлайн-курсов</li>
              <li className={teacher.teacher__item}>Педагогический дизайнер</li>
              <li className={teacher.teacher__item}>Специалист в&nbsp;области игрофикации обучения</li>
              <li className={teacher.teacher__item}>Обучила более 5&nbsp;000 студентов в&nbsp;группах</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section className={reviews.reviews}>
      <div className={'container'}>
        <h2 className={reviews.reviews__title}>Отзывы участников</h2>
      </div>
      <TextReviewsNew data={reviewsData} />
    </section>
  );
};

const Registration = () => {
  return (
    <section className={registration.registration} id={'reg'}>
      <div className={'container'}>
        <div className={registration.registration__wrap}>
          <div className={registration.registration__info}>
            <div className={registration.registration__top}>
              <h2 className={registration.registration__title}>Стоимость тренинга</h2>
              <span className={`${registration.registration__text} ${registration.registration__textLineThrough}`}>
                25&nbsp;000&nbsp;₽
              </span>
              <span className={`${registration.registration__text} ${registration.registration__textAccent}`}>
                18&nbsp;900&nbsp;₽
              </span>
              <span className={`${registration.registration__text} ${registration.registration__textSmall}`}>
                Скидка: 6&nbsp;100&nbsp;₽
              </span>
            </div>

            <div className={registration.registration__bottom}>
              <span className={`${registration.registration__text} ${registration.registration__textSubtitle}`}>
                Оплата по&nbsp;месяцам без переплаты
              </span>
              <span className={`${registration.registration__text} ${registration.registration__textAccent}`}>
                1&nbsp;890&nbsp;₽
                <span
                  className={`${registration.registration__text} ${registration.registration__textAccent} ${registration.registration__textSmall2}`}
                >
                  /месяц
                </span>
              </span>
              <span className={`${registration.registration__text} ${registration.registration__textSmall}`}>
                на&nbsp;10&nbsp;месяцев
              </span>
            </div>
          </div>

          <div className={registration.registration__widget} id={'widget'}>
            <GetCourseWidget hash={'89053cc820841629bd12eed593eb1b2c440fb15d'} id={'889093'} />
          </div>
        </div>
      </div>
    </section>
  );
};

const OurLicenses = () => {
  return (
    <section className={ourLicenses.ourLicenses}>
      <div className={'container'}>
        <div className={ourLicenses.ourLicenses__top}>
          <h3 className={ourLicenses.ourLicenses__title}>Нас ценят эксперты образования</h3>
          <ExpertLicenses data={expertLicenses} />
        </div>

        <div className={ourLicenses.ourLicenses__bottom}>
          <h3 className={ourLicenses.ourLicenses__title}>Мы развиваем образование</h3>
          <Licenses data={licenses} />
        </div>
      </div>
    </section>
  );
};

export const Head = () => <title>Любой иностранный за месяц</title>;

const Page = () => (
  <DefaultLayout
    title={'Любой иностранный за месяц'}
    description={'С нуля до разговора на бытовые темы с помощью методики преподавателя 4-х иностранных языков'}
  >
    <YandexMetrika />
    <MailRu />
    <TikTok />
    <VKPixel />
    <AdvCake />

    <main>
      <Hero />
      <TargetAudience />
      <AboutWorkshop />
      <Lessons />
      <Program />
      <Teacher />
      <Reviews />
      <Registration />
      <AdvanceRocket className={main.rocket} />
      <OurLicenses />
    </main>

    <FooterFull />
  </DefaultLayout>
);

export default Page;
