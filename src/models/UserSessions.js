class UserSessions {
  constructor(sessionsData) {
    const order = ["L", "M", "M", "J", "V", "S", "D"];
    this.sessions = sessionsData.map(({ day, sessionLength }) => ({
      day: order[day - 1],
      value: sessionLength,
    }));
  }

  getSessions() {
    return this.sessions;
  }
}

export default UserSessions;
