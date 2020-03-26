class Github {
  constructor() {
    this.client_id = 'e3f5e3321b9d13df9c37';
    this.client_secret = '5730227e68fbcda1f69db1bf58de748ada704cf4';
  }

  // Get user method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    // return profileData; returning as object below
    return {
      profile
      // same as profile: profile
    }
  }
}