import Projects from './projects.json';

export default {
    // Return a Promise to simulate an async call
  getProjects: function() {
    return new Promise(resolve => {
      resolve(Projects);
    });
  }
}