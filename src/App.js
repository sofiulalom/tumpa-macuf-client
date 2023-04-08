
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './LeyOut/Main/Routers/Router/Router';

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
