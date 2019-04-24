module.exports = exports = {
  port: "4000",
  theme: "basic",
  languages: [
    {
      "code": "en-us",
      "relative_url_prefix": "/"
    }
  ],
  plugins: {
    templatedatefilter : {}
  },
  contentstack: {
    api_key: process.env.CONTENTSTACK_API_KEY,
    access_token: process.env.CONTENTSTACK_ACCESS_TOKEN
  }
};