import NavTop from "../components/NavTop";
import NavLeft from "../components/NavLeft";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard/Dashboard";

function Profile() {
  return (
    <div className="app-container">
      <NavTop />
      <div className="main-content">
        <NavLeft />
        <main>
          <Header />
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default Profile;
