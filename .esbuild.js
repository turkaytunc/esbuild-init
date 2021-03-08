process.env.NODE_ENV = 'production';
require('esbuild').buildSync({
  entryPoints: ['index.tsx'],
  loader: { '.ts': 'tsx' },
  bundle: true,
  outfile: 'build.js',
  minify: true,
  define: { 'process.env.NODE_ENV': "'production'" },
  target: ['es6', 'node12'],
  external: ['react', 'react-dom'],
  platform: 'browser',
});
