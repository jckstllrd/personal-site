import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
