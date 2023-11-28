module.exports = {
  build: {
    command: "npm run build",
    publish: "dist",
  },
  redirects: [
    {
      from: "/old-page",
      to: "/new-page",
      status: 301,
    },
  ],
};
