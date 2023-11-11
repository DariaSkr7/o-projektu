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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam
        odit, assumenda fugiat earum laborum, esse cumque molestiae ullam
        laboriosam, magni possimus debitis at? Molestiae eveniet quasi vero
        praesentium obcaecati! Optio nihil nemo vero molestias soluta blanditiis
        possimus doloribus cupiditate et! Id sed necessitatibus dolorum rem
        harum eveniet perferendis expedita facilis totam accusamus velit, alias
        consequuntur quis sapiente ut illo! Vel in suscipit tempora iure harum!
        Rem asperiores, inventore sapiente quas odit optio atque, minima sunt,
        fugit aut dolores facere quod modi quam? Dignissimos placeat, natus
        delectus distinctio fugiat ullam! Quia nostrum veritatis consequuntur
        voluptates qui nisi quas a dicta ducimus corporis vel eaque iure
        quisquam odit facilis, exercitationem fuga numquam alias earum rem
        aspernatur inventore rerum et laudantium. Labore. Facilis consectetur
        voluptatibus id. Sapiente placeat odit, nulla officiis est perspiciatis
        quod asperiores optio repudiandae iste molestiae totam sunt fugiat at
        eius quasi eligendi harum ducimus, quidem numquam expedita sequi!
      </p>
    ),
  },
  {
    id: 'more-details',
    name: 'more-details',
    image: '../../pages/HomePage/img/dashboard.png',
    text: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam
        odit, assumenda fugiat earum laborum, esse cumque molestiae ullam
        laboriosam, magni possimus debitis at? Molestiae eveniet quasi vero
        praesentium obcaecati! Optio nihil nemo vero molestias soluta blanditiis
        possimus doloribus cupiditate et! Id sed necessitatibus dolorum rem
        harum eveniet perferendis expedita facilis totam accusamus velit, alias
        consequuntur quis sapiente ut illo! Vel in suscipit tempora iure harum!
        Rem asperiores, inventore sapiente quas odit optio atque, minima sunt,
        fugit aut dolores facere quod modi quam? Dignissimos placeat, natus
        delectus distinctio fugiat ullam! Quia nostrum veritatis consequuntur
        voluptates qui nisi quas a dicta ducimus corporis vel eaque iure
        quisquam odit facilis, exercitationem fuga numquam alias earum rem
        aspernatur inventore rerum et laudantium. Labore. Facilis consectetur
        voluptatibus id. Sapiente placeat odit, nulla officiis est perspiciatis
        quod asperiores optio repudiandae iste molestiae totam sunt fugiat at
        eius quasi eligendi harum ducimus, quidem numquam expedita sequi!
      </p>
    ),
  },
  {
    id: 'anna',
    name: 'Anna Švejdová',
    image: '../../pages/HomePage/img/anna.png',
    text: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam
        odit, assumenda fugiat earum laborum, esse cumque molestiae ullam
        laboriosam, magni possimus debitis at? Molestiae eveniet quasi vero
        praesentium obcaecati! Optio nihil nemo vero molestias soluta blanditiis
        possimus doloribus cupiditate et! Id sed necessitatibus dolorum rem
        harum eveniet perferendis expedita facilis totam accusamus velit, alias
        consequuntur quis sapiente ut illo! Vel in suscipit tempora iure harum!
        Rem asperiores, inventore sapiente quas odit optio atque, minima sunt,
        fugit aut dolores facere quod modi quam? Dignissimos placeat, natus
        delectus distinctio fugiat ullam! Quia nostrum veritatis consequuntur
        voluptates qui nisi quas a dicta ducimus corporis vel eaque iure
        quisquam odit facilis, exercitationem fuga numquam alias earum rem
        aspernatur inventore rerum et laudantium. Labore. Facilis consectetur
        voluptatibus id. Sapiente placeat odit, nulla officiis est perspiciatis
        quod asperiores optio repudiandae iste molestiae totam sunt fugiat at
        eius quasi eligendi harum ducimus, quidem numquam expedita sequi!
      </p>
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
