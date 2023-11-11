import './style.css';

import { Menu } from '../../components/Menu';
import { AboutProject } from '../../components/AboutProject';
import { AboutDaria } from '../../components/AboutDaria';
import { AboutAnna } from '../../components/AboutAnna';
import { Footer } from '../../components/Footer';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <Menu />
        <h1>TRAVEL DIARY</h1>
      </header>
      <main>
        <AboutProject />
        <AboutDaria />
        <AboutAnna />
      </main>
      <Footer />
    </div>
  );
};
