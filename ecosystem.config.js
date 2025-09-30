module.exports = {
  apps: [{
    name: 'react-app',
    script: 'server.js',
    exec_mode: 'fork',
    env: {
      PORT: 1080,
      NODE_ENV: 'production'
    }
  }]
};