import axios from "axios";
import User from "../models/User";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mocks/mockData";
import UserPerformance from "../models/UserPerformance";
import UserSessions from "../models/UserSessions";
import UserActivity from "../models/UserActivity";

// URL de l'API
const API_URL = "http://localhost:3000";

// Mode de l'application (development ou production)
const mode = "production";

// Fonction pour récupérer les données utilisateur générales
export async function fetchUserData(userId) {
  try {
    // Si on est en mode développement, on utilise les données de mockData
    if (mode === "development") {
      const userData = USER_MAIN_DATA.find(
        (user) => user.id === parseInt(userId)
      );

      return new User(userData);
    }

    const response = await axios.get(`${API_URL}/user/${userId}`);

    return new User(response.data.data);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données utilisateur :",
      error
    );
    throw error;
  }
}

// Fonction pour récupérer l'activité quotidienne
export async function fetchUserActivity(userId) {
  try {
    // Si on est en mode développement, on utilise les données de mockData
    if (mode === "development") {
      const userActivity = USER_ACTIVITY.find(
        (user) => user.userId === parseInt(userId)
      );

      return new UserActivity(userActivity);
    }

    const response = await axios.get(`${API_URL}/user/${userId}/activity`);

    return new UserActivity(response.data.data);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données d'activité :",
      error
    );
    throw error;
  }
}

// Fonction pour récupérer la durée moyenne des sessions
export async function fetchUserAverageSessions(userId) {
  try {
    // Si on est en mode développement, on utilise les données de mockData
    if (mode === "development") {
      const averageSessions = USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === parseInt(userId)
      );

      return new UserSessions(averageSessions.sessions);
    }

    const response = await axios.get(
      `${API_URL}/user/${userId}/average-sessions`
    );

    return new UserSessions(response.data.data.sessions);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des sessions moyennes :",
      error
    );
    throw error;
  }
}

// Fonction pour récupérer les performances de l'utilisateur (pour le radar chart)
export async function fetchUserPerformance(userId) {
  try {
    // Si on est en mode développement, on utilise les données de mockData
    if (mode === "development") {
      const userPerformance = USER_PERFORMANCE.find(
        (user) => user.userId === parseInt(userId)
      );

      // console.log(
      //  "userPerformance Dev",
      //  new UserPerformance(userPerformance.data)
      // );

      return new UserPerformance(userPerformance.data);
    }

    const response = await axios.get(`${API_URL}/user/${userId}/performance`);

    // console.log("Performance Data:", response.data.data.data);

    // Retourner une instance de UserPerformance
    return new UserPerformance(response.data.data.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des performances :", error);
    throw error;
  }
}

// Fonction pour récupérer les chiffres clés de l'utilisateur
export async function fetchUserKeyData(userId) {
  try {
    // Si on est en mode développement, on utilise les données de mockData
    if (mode === "development") {
      const userKeyData = USER_MAIN_DATA.find(
        (user) => user.id === parseInt(userId)
      ).keyData;

      console.log("userKeyData Development", userKeyData);

      return userKeyData;
    }
    const response = await axios.get(`${API_URL}/user/${userId}`);

    console.log("userKeyData API", response.data.data.keyData);

    return response.data.data.keyData;
  } catch (error) {
    console.error("Erreur lors de la récupération des chiffres clés :", error);
    throw error;
  }
}