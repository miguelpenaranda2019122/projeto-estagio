const path = require('path');

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
};

module.exports = nextConfig;