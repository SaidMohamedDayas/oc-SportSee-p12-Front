class User {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.todayScore = data.todayScore || data.score;
    this.keyData = data.keyData;
  }

  // Renvoie le prénom de l'utilisateur
  getFirstName() {
    return this.firstName;
  }

  // Renvoie le score du jour
  getTodayScore() {
    return this.todayScore;
  }

  // Renvoie les données clés formatées
  getKeyData() {
    return {
      calorie: this.keyData.calorieCount,
      protein: this.keyData.proteinCount,
      carbohydrate: this.keyData.carbohydrateCount,
      lipid: this.keyData.lipidCount,
    };
  }
}

export default User;
