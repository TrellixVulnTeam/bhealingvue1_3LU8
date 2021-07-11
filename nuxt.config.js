export default {
  target: "static",
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
        class: "animated spin"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/vue2-animate/dist/vue2-animate.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vuelidate"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ],
    "@nuxt/content"
  ],
  generate: {
    async routes() {
      const contentPaths = ["docs"];

      const files = [];
      contentPaths.forEach(async path => {
        const file = await $content(path).fetch();
        files.push(file);
      });

      const generated = files.map(file => {
        return {
          route: file.path === "/index" ? "/" : file.path,
          payload: fs.readFileSync(
            `./content/${file.path}${file.extension}`,
            "utf-8"
          )
        };
      });

      return generated;
    }
  },
  content: {
    //Options
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
