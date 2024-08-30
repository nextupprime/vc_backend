module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-imagekit", // Community providers need to have the full package name
      providerOptions: {
        publicKey: env("IMAGE_KIT_PUBLIC_KEY"),
        privateKey: env("IMAGE_KIT_PRIVATE_KEY"),
        urlEndpoint: env("IMAGE_KIT_URL_ENDPOINT"), // Example: https://ik.imagekit.io/username
        // Optional
        params: {
          folder: "/production/images", // Defaults to "/" if value is not supplied
        },
      },
    },
  },

  documentation: {
    enabled: true,
    config: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "DOCUMENTATION",
        description: "",
        termsOfService: "YOUR_TERMS_OF_SERVICE_URL",
        contact: {
          name: "TEAM",
          email: "contact-email@something.io",
          url: "mywebsite.io",
        },
        license: {
          name: "Apache 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0.html",
        },
      },
      "x-strapi-config": {
        // Leave empty to ignore plugins during generation
        plugins: ["upload", "users-permissions"],
        path: "/documentation",
      },
      servers: [
        { url: "http://localhost:1337/api", description: "Development server" },
      ],
      externalDocs: {
        description: "Find out more",
        url: "https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html",
      },
      security: [{ bearerAuth: [] }],
    },
  },
});
