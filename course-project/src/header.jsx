import "./css/header.css";
function header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span>Sinevizyon</span>
      </div>
      <div className="headerLinks">
        <ul className="navLink">
          <li>
            <a>Filmler</a>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default header;
