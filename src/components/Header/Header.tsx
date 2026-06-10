import { useNavigate } from "react-router";
import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <span>jack stallard</span>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
