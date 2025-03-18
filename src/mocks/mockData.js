const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Mock 12",
      lastName: "Doe",
      age: 30,
    },
    todayScore: 0.9,
    keyData: {
      calorieCount: 2200,
      proteinCount: 140,
      carbohydrateCount: 320,
      lipidCount: 80,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: "Mock 18",
      lastName: "Doe",
      age: 35,
    },
    score: 0.75,
    keyData: {
      calorieCount: 1900,
      proteinCount: 110,
      carbohydrateCount: 210,
      lipidCount: 95,
    },
  },
];

const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      {
        day: "2021-08-01",
        kilogram: 80,
        calories: 260,
      },
      {
        day: "2021-08-02",
        kilogram: 81,
        calories: 240,
      },
      {
        day: "2021-08-03",
        kilogram: 82,
        calories: 300,
      },
      {
        day: "2021-08-04",
        kilogram: 83,
        calories: 310,
      },
      {
        day: "2021-08-05",
        kilogram: 81,
        calories: 180,
      },
      {
        day: "2021-08-06",
        kilogram: 79,
        calories: 190,
      },
      {
        day: "2021-08-07",
        kilogram: 77,
        calories: 410,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: "2021-08-01",
        kilogram: 70,
        calories: 260,
      },
      {
        day: "2021-08-02",
        kilogram: 69,
        calories: 240,
      },
      {
        day: "2021-08-03",
        kilogram: 70,
        calories: 300,
      },
      {
        day: "2021-08-04",
        kilogram: 70,
        calories: 520,
      },
      {
        day: "2021-08-05",
        kilogram: 69,
        calories: 180,
      },
      {
        day: "2021-08-06",
        kilogram: 69,
        calories: 190,
      },
      {
        day: "2021-08-07",
        kilogram: 69,
        calories: 410,
      },
    ],
  },
];

const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 40,
      },
      {
        day: 2,
        sessionLength: 30,
      },
      {
        day: 3,
        sessionLength: 55,
      },
      {
        day: 4,
        sessionLength: 60,
      },
      {
        day: 5,
        sessionLength: 10,
      },
      {
        day: 6,
        sessionLength: 10,
      },
      {
        day: 7,
        sessionLength: 70,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 40,
      },
      {
        day: 2,
        sessionLength: 50,
      },
      {
        day: 3,
        sessionLength: 60,
      },
      {
        day: 4,
        sessionLength: 40,
      },
      {
        day: 5,
        sessionLength: 40,
      },
      {
        day: 6,
        sessionLength: 60,
      },
      {
        day: 7,
        sessionLength: 60,
      },
    ],
  },
];

const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 90,
        kind: 1,
      },
      {
        value: 80,
        kind: 2,
      },
      {
        value: 90,
        kind: 3,
      },
      {
        value: 30,
        kind: 4,
      },
      {
        value: 70,
        kind: 5,
      },
      {
        value: 10,
        kind: 6,
      },
    ],
  },
  {
    userId: 18,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 50,
        kind: 1,
      },
      {
        value: 70,
        kind: 2,
      },
      {
        value: 75,
        kind: 3,
      },
      {
        value: 10,
        kind: 4,
      },
      {
        value: 30,
        kind: 5,
      },
      {
        value: 100,
        kind: 6,
      },
    ],
  },
];

export {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
};
