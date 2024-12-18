import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 
})


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     middlewareMode: false,
//     configureServer: (server) => {
//       server.middlewares.use((req, res, next) => {
//         // Modify headers to add charset=utf-8 to all text/javascript responses
//         const originalWriteHead = res.writeHead;
//         res.writeHead = function (statusCode, headers) {
//           if (
//             headers &&
//             headers['Content-Type'] &&
//             headers['Content-Type'].includes('text/javascript')
//           ) {
//             headers['Content-Type'] = 'text/javascript; charset=utf-8';
//           }
//           originalWriteHead.call(this, statusCode, headers);
//         };
//         next();
//       });
//     },
//   },
// });
