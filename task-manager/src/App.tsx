import Column from './components/column.tsx';
import Card from './components/card.tsx';

function App() {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='flex w-6/10 h-4/5 gap-4'>
        <Column />
        <Column />
        <Column />
      </div>
    </div>    
  );
}

export default App;
