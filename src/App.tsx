import { Outlet } from "react-router";
import Nav from "@/components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.layoutWrapper}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
