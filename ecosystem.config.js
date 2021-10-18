module.exports = {
    apps: [{
      script: "dist/main.js",
      watch: ["dist"],
      autorestart: true,
      // Delay between restart
      watch_delay: 1000,
      ignore_watch : ["node_modules", "files","src"],
      env: {
        "PORT": 3000,
        "DATABASE_URL": "mysql://root:secret@127.0.0.1:3306/saleshero"
    },
    }]
  }