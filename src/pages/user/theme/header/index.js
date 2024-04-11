
import{memo  } from "react";
import"./header.scss";

const Header = () => {

    return (
        <div className="Header_Me">

                <div className="container">
                <div className="header">
      <div className="header-left">
        <div className="header-section">
          <div className="header-item">About</div>
          <div className="header-item">Contact</div>
          <div className="header-item">Press</div>
          <div className="header-item">Portfolio</div>
          <div className="header-item">Impression</div>

        </div>
        <div className="header-section">
          <div className="header-item">NESTSPACE</div>

        </div>
      </div>
      <div className="header-right">
        <div className="header-section">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>

        </div>
      </div>
    </div>
                </div>

        </div>
        
    );
}

export default memo(Header);