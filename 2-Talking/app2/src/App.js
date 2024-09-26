// import React from 'react';

// const App = () => (
//   <div style={{ border: '1px solid red', padding: '10px' }}>
//     <h1>App 2</h1>
//     <p>This is a micro-frontend</p>
//   </div>
// );

// export default App;

import React from "react";
import useSharedStore from "./store"; // Local store or shared store from the container

const App = () => {
  const { sharedData, setSharedData } = useSharedStore();

  const updateData = (newData) => {
    setSharedData(newData); // Updates the shared or local store
  };

  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <h1>App 2</h1>
      <p>Shared Data: {sharedData}</p>
      <button onClick={() => updateData("Updated by App 2")}>
        Update Data
      </button>
    </div>
  );
};

export default App;
