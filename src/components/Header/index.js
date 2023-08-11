import React, { useState } from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { search } from "../../redux/actions";

const Header = (props) => {
  const [menuClick, setMenuClick] = useState(false);
  const [menuClickVisible, setMenuClickVisible] = useState(false);
  const [className, setClassName] = useState("navLinkAndSearch");
  const [searchValue, setSearchValue] = useState("");

  window.addEventListener("resize", () => {
    if (window.innerWidth > 740) {
      console.log("laptop");
      setClassName("navLinkAndSearch");
      setMenuClickVisible(false);
    } else if (window.innerWidth < 740) {
      setClassName("navLinksJavaScript");
      setMenuClickVisible(true);
      console.log("moblie");
    }
  });

  const handleMenu = () => {
    setMenuClick(!menuClick);
  };

  // Searching the tittle
  const searchTitle = (e) => {
    e.preventDefault();
    const data = searchValue;
    props.seachQuery(data);
    setSearchValue("");
  };

  return (
    <div className="headerContainer">
      <div className="navLogo">
        <WalletIcon id="logo" />
        <span>Xepense Tracker</span>
      </div>
      <div
        className={className}
        id="LinkAndSearch"
        style={
          menuClickVisible
            ? menuClick
              ? { display: "flex", marginBottom: "120px" }
              : { display: "none" }
            : { display: "flex" }
        }
      >
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/addExpense" activeClassName="active">
              Add Expense
            </NavLink>
          </li>
          <li>
            <NavLink to="/trackExpense" activeClassName="active">
              Track Expense
            </NavLink>
          </li>
        </ul>

        <form className="search">
          <input
            type="text"
            placeholder="Search Expense"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={(e) => searchTitle(e)}>Search</button>
        </form>
      </div>
      <div id="menu" onClick={handleMenu}>
        <MenuIcon />
      </div>
    </div>
  );
};
const mapStateToProps = () => ({});
const mapStateToDispatch = (dispatch) => ({
  seachQuery: (data) => dispatch(search(data)),
});

export default connect(mapStateToProps, mapStateToDispatch)(Header);
