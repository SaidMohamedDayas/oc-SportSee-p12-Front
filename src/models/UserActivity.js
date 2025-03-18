class UserActivity {
  constructor(data) {
    this.sessions = data.sessions.map((session, index) => ({
      day: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }

  getSessions() {
    return this.sessions;
  }
}

export default UserActivity;
