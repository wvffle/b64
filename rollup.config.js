import globals from 'rollup-plugin-node-globals'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/b64.js',
    format: 'umd',
    name: 'b64',
  },
  plugins: [
    globals({
      buffer: false,
    }),
  ]
};
