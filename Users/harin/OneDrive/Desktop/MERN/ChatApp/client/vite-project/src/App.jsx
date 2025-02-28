import { Outlet } from "react-router-dom";
import "./AppStyle.css";  // Importing the single CSS file

const App = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">Vibely</h1>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />  {/* This will render child components like Join or Chat */}
      </main>

      {/* Footer Section */}
      <footer className="footer">
        © {new Date().getFullYear()} Vibely. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
