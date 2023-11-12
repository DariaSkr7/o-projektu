import './style.css';

export const About = ({ id, name, image, text, icons }) => {
  return (
    <>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <section id={id}>
        <div>
          <h3>{name}</h3>
          {text}
          {icons}
        </div>
      </section>
    </>
  );
};
