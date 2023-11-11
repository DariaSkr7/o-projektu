import './style.css';

export const About = ({ name, image, text }) => {
  return (
    <section className="about--layout">
      <h2 className="profile__name">{name}</h2>
      <div className="profile__card--layout">
        <div className="img__container">
          <img className="profile__image" src={image} alt={name} />
        </div>
        <article className="profile__description">
          <p>{text}</p>
        </article>
      </div>
    </section>
  );
};
