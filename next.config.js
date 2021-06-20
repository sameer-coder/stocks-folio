
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['ry6BNBYAPy6U8tuzq59tYx'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  