import NavLeft from "../components/NavLeft";
import NavTop from "../components/NavTop";

function NotFound() {
  return (
    <div className="app-container">
      <NavTop />
      <div className="main-content">
        <NavLeft />
        <main>
          <h1>404</h1>
          <p>Utilisateur non trouvée</p>
        </main>
      </div>
    </div>
  );
}

export default NotFound;
