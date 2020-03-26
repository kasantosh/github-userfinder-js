class Github {
  constructor() {
    this.client_id = 'e3f5e3321b9d13df9c37';
    this.client_secret = '5730227e68fbcda1f69db1bf58de748ada704cf4';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }



  // Get user method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    // return profileData; returning as object below
    return {
      profile,
      repos
      // same as profile: profile or repos: repos
    }
  }
}