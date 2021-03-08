import React from 'react';

const App = () => {
  const sum = (a: number, b: number) => a + b;
  return (
    <div>
      App Component
      {sum(3, 5)}
    </div>
  );
};

export default App;
