import './style.css';

export const About = ({ id, name, image, text }) => {
  return (
    <>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <section id={id}>
        <div>
          <h3>{name}</h3>
          {text}
        </div>
      </section>
    </>
  );
};
