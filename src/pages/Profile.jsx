import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavTop from "../components/NavTop";
import NavLeft from "../components/NavLeft";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard/Dashboard";
import { fetchUserData } from "../api/api";

function Profile() {
  const { id } = useParams(); // Récupère l'ID de l'utilisateur depuis l'URL
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchUserData(id); // Appel API
        setUserData(data); // Stocke les données utilisateur
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Arrête le chargement
      }
    }

    getData();
  }, [id]);

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className="app-container">
      <NavTop />
      <div className="main-content">
        <NavLeft />
        <main>
          {/* Passe le prénom de l'utilisateur au composant Header */}
          <Header firstName={userData.userInfos.firstName} />
          <Dashboard userData={userData} />
        </main>
      </div>
    </div>
  );
}

export default Profile;
