import './style.css';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { About } from '../../components/About';

const pagesInfo = [
  {
    id: 'project',
    name: 'About project',
    image: '../../pages/HomePage/img/places.png',
    text: (
      <>
        <p>Let's embark on a journey and travel the world!</p>
        <p>
          Our user will be able to create a personalized interactive map of
          their global adventures. It will be a digital experience that allows
          the user to immerse themselves in the heartbeat of each destination
          with essential country information at their fingertips.
        </p>
        <p>
          Every moment of user's trip becomes a cherished memory thanks to our
          app!
        </p>
      </>
    ),
  },
  {
    id: 'more-details',
    name: 'More details',
    image: '../../pages/HomePage/img/dashboard.png',
    text: (
      <>
        <p>
          We aim to create a travel diary application catering to all explorers,
          featuring an interactive map, essential country information, and
          functionalities for trip planning and archiving.
        </p>
        <p>
          Our project revolves around an interactive world map accompanied by
          statistics, allowing travelers to save details about their past trips.
        </p>
        <p>
          To maintain the spirit of wanderlust, we'll also provide a gallery of
          places with information on each location, including country overviews,
          cultural highlights, popular destinations, and weather.
        </p>
      </>
    ),
  },
  {
    id: 'anna',
    name: 'Anna Švejdová',
    image: '../../pages/HomePage/img/anna.png',
    text: (
      <>
        <p>
          Hello, I'm Anna, and I'm at the beginning of my journey toward
          becoming a frontend developer. I am a keen explorer and a passionate
          learner. I love the fact that technology helps us overcome obstacles
          and create things that were mere dreams just a few years ago.
        </p>
        <p>
          Little by little, I'm getting the superpowers of React and the
          underlying technologies under my skin.
        </p>
        <p> Let's embrace the challenge!</p>
      </>
    ),
  },
  {
    id: 'daria',
    name: 'Daria Skoryk',
    image: '../../pages/HomePage/img/daria.jpg',
    text: (
      <>
        <p>
          Welcome to my corner of this project! I'm Daria, and I'm passionate
          about traveling. With programming skills, I strive to discover the IT
          world as well.
        </p>
        <p>
          I believe in the power of ReactJS, and my journey is dedicated to
          learn it. Whether I'm making bugs or shouting at code, I'm committed
          to getting this skill.
        </p>
        <p>Thank you for taking part in this journey with me.</p>
      </>
    ),
  },
];

const renderAboutSections = () => {
  return pagesInfo.map((pageInfo) => {
    return (
      <About
        id={pageInfo.id}
        key={pageInfo.id}
        name={pageInfo.name}
        image={pageInfo.image}
        text={pageInfo.text}
      />
    );
  });
};

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <Menu />
      </header>
      <main>
        <div className="main-section">
          <h1>TRAVEL DIARY</h1>
          <h2>
            Don't let the world's chaos deter you,
            <br />
            let the wanderlust within you guide you.
          </h2>
        </div>
        <article>{renderAboutSections()}</article>
      </main>
      <Footer />
    </div>
  );
};
