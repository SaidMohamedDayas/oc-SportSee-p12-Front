class UserPerformance {
  constructor(performanceData) {
    this.performance = performanceData.map(({ value, kind }) => ({
      value,
      kind,
    }));
  }

  getPerformance() {
    return this.performance;
  }

  // Méthode pour obtenir un kind lisible
  getReadablePerformance(kindMapping) {
    const order = [
      "Intensité",
      "Vitesse",
      "Force",
      "Endurance",
      "Energie",
      "Cardio",
    ];
    const performanceWithNames = this.performance.map((item) => ({
      name: kindMapping[item.kind],
      value: item.value,
    }));

    // Trier les performances selon l'ordre spécifié
    performanceWithNames.sort(
      (a, b) => order.indexOf(a.name) - order.indexOf(b.name)
    );

    return performanceWithNames;
  }
}

export default UserPerformance;
