import React, { lazy, Suspense } from "react";

const App1 = lazy(() => import("app1/App"));
const App2 = lazy(() => import("app2/App"));

const App = () => (
  <div>
    <h1>Micro-frontend Container</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <App1 />
      <App2 />
    </Suspense>
  </div>
);

export default App;

// TODO: This code is used to handle the scenario where the micro-frontend fails to load.
// By using lazyWithRetry, we can catch the error and display a fallback UI instead of breaking the entire application.

// import React, { lazy, Suspense } from "react";

// const lazyWithRetry = (factory) => {
//   return lazy(() =>
//     factory().catch((error) => {
//       console.error("Micro-frontend loading failed:", error);
//       return {
//         default: () => <div>Failed to load this micro-frontend.</div>,
//       };
//     })
//   );
// };

// const App1 = lazyWithRetry(() => import("app1/App"));
// const App2 = lazyWithRetry(() => import("app2/App"));

// const App = () => {
//   return (
//     <div>
//       <h1>Micro-frontend Container</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <App1 />
//         <App2 />
//       </Suspense>
//     </div>
//   );
// };

// export default App;
