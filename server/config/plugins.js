module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "tnchnkit@hotmail.com",
        defaultReplyTo: "kyzenbina@gmail.com",
      },
    },
  },
  // ...
});
