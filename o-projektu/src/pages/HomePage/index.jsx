import './style.css';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { About } from '../../components/About';

const pagesInfo = [
  {
    id: 'project',
    name: 'About project',
    image: '',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam odit, assumenda fugiat earum laborum, esse cumque molestiae ullam laboriosam, magni possimus debitis at? Molestiae eveniet quasi vero praesentium obcaecati!
    Optio nihil nemo vero molestias soluta blanditiis possimus doloribus cupiditate et! Id sed necessitatibus dolorum rem harum eveniet perferendis expedita facilis totam accusamus velit, alias consequuntur quis sapiente ut illo!
    Vel in suscipit tempora iure harum! Rem asperiores, inventore sapiente quas odit optio atque, minima sunt, fugit aut dolores facere quod modi quam? Dignissimos placeat, natus delectus distinctio fugiat ullam!
    Quia nostrum veritatis consequuntur voluptates qui nisi quas a dicta ducimus corporis vel eaque iure quisquam odit facilis, exercitationem fuga numquam alias earum rem aspernatur inventore rerum et laudantium. Labore.
    Facilis consectetur voluptatibus id. Sapiente placeat odit, nulla officiis est perspiciatis quod asperiores optio repudiandae iste molestiae totam sunt fugiat at eius quasi eligendi harum ducimus, quidem numquam expedita sequi!`,
  },
  {
    id: 'anna',
    name: 'Anna Švejdová',
    image: '',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam odit, assumenda fugiat earum laborum, esse cumque molestiae ullam laboriosam, magni possimus debitis at? Molestiae eveniet quasi vero praesentium obcaecati!
    Optio nihil nemo vero molestias soluta blanditiis possimus doloribus cupiditate et! Id sed necessitatibus dolorum rem harum eveniet perferendis expedita facilis totam accusamus velit, alias consequuntur quis sapiente ut illo!
    Vel in suscipit tempora iure harum! Rem asperiores, inventore sapiente quas odit optio atque, minima sunt, fugit aut dolores facere quod modi quam? Dignissimos placeat, natus delectus distinctio fugiat ullam!
    Quia nostrum veritatis consequuntur voluptates qui nisi quas a dicta ducimus corporis vel eaque iure quisquam odit facilis, exercitationem fuga numquam alias earum rem aspernatur inventore rerum et laudantium. Labore.
    Facilis consectetur voluptatibus id. Sapiente placeat odit, nulla officiis est perspiciatis quod asperiores optio repudiandae iste molestiae totam sunt fugiat at eius quasi eligendi harum ducimus, quidem numquam expedita sequi!`,
  },
  {
    id: 'daria',
    name: 'Daria Skoryk',
    image: '',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam odit, assumenda fugiat earum laborum, esse cumque molestiae ullam laboriosam, magni possimus debitis at? Molestiae eveniet quasi vero praesentium obcaecati!
    Optio nihil nemo vero molestias soluta blanditiis possimus doloribus cupiditate et! Id sed necessitatibus dolorum rem harum eveniet perferendis expedita facilis totam accusamus velit, alias consequuntur quis sapiente ut illo!
    Vel in suscipit tempora iure harum! Rem asperiores, inventore sapiente quas odit optio atque, minima sunt, fugit aut dolores facere quod modi quam? Dignissimos placeat, natus delectus distinctio fugiat ullam!
    Quia nostrum veritatis consequuntur voluptates qui nisi quas a dicta ducimus corporis vel eaque iure quisquam odit facilis, exercitationem fuga numquam alias earum rem aspernatur inventore rerum et laudantium. Labore.
    Facilis consectetur voluptatibus id. Sapiente placeat odit, nulla officiis est perspiciatis quod asperiores optio repudiandae iste molestiae totam sunt fugiat at eius quasi eligendi harum ducimus, quidem numquam expedita sequi!`,
  },
];

const renderAboutSections = () => {
  return pagesInfo.map((pageInfo) => {
    return (
      <About
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
        <section>
          <h1>TRAVEL DIARY</h1>
        </section>
        {renderAboutSections()}
      </main>
      <Footer />
    </div>
  );
};
