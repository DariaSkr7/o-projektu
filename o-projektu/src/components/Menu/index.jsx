import './style.css';

export const Menu = () => {
  const onLinkClick = () => {
    // fix link click bug
    window.scrollTo({ top: window.top });
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a onClick={onLinkClick} href="#project">
            Project
          </a>
        </li>
        <li>
          <a onClick={onLinkClick} href="#anna">
            Anna
          </a>
        </li>
        <li>
          <a onClick={onLinkClick} href="#daria">
            Daria
          </a>
        </li>
      </ul>
    </nav>
  );
};
