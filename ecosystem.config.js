module.exports = {
    apps: [{
      script: "dist/main.js",
      watch: ["dist"],
      autorestart: true,
      // Delay between restart
      watch_delay: 1000,
      ignore_watch : ["node_modules", "files","src"],
    }]
  }