module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/assets/style/util/_variable.scss";
          @import "src/assets/style/util/mixin/_breakpoint.scss";
          @import "src/assets/style/util/mixin/_fluid-type.scss";
          @import "src/assets/style/util/function/_rem-value.scss";
        `,
      },
    },
  },
};
