import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mocks/mockData";

// URL de l'API
const API_URL = "http://localhost:3000";

// Mode de l'application (development ou production)
const mode = "development";

// Fonction pour récupérer les données utilisateur générales
export async function fetchUserData(userId) {
  try {
    // Si on est en mode développement, on utilise les données de mockData
    if (mode === "development") {
      const userData = USER_MAIN_DATA.find(
        (user) => user.id === parseInt(userId)
      );
      console.log("userData Development", userData);

      return userData;
    }
    const response = await axios.get(`${API_URL}/user/${userId}`);
    console.log("userData API", response.data.data);

    return response.data.data;
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

      console.log("userActivity Development", userActivity);

      return userActivity;
    }

    const response = await axios.get(`${API_URL}/user/${userId}/activity`);
    console.log("userActivity API", response.data.data);

    return response.data.data;
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

      console.log("averageSessions Development", averageSessions);

      return averageSessions;
    }

    const response = await axios.get(
      `${API_URL}/user/${userId}/average-sessions`
    );
    console.log("averageSessions API", response.data.data);

    return response.data.data;
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

      console.log("userPerformance Development", userPerformance);

      return userPerformance;
    }

    const response = await axios.get(`${API_URL}/user/${userId}/performance`);
    console.log("userPerformance API", response.data.data);

    return response.data.data;
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

// test api
fetchUserPerformance(12);
fetchUserKeyData(12);
fetchUserAverageSessions(12);
fetchUserActivity(12);
