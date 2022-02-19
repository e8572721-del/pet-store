module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/asset/style/util/_variable.scss";
        `,
      },
    },
  },
};
