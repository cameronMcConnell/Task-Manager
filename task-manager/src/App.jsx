import { useState } from 'react';
import {DndContext} from '@dnd-kit/core';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <DndContext>
      <div>
        <p>Hello World!</p>
      </div>
    </DndContext>
  );
}

export default App;
