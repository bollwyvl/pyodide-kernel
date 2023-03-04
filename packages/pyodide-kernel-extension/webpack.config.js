module.exports = {
  module: {
    rules: [
      {
        test: /pypi\/.*/,
        type: 'asset/resource',
        generator: {
          filename: 'pypi/[name][ext][query]',
        },
      },
    ],
  },
};
