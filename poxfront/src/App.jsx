import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StorePage } from './pages/StorePage';
import { StoreNew } from './pages/StoreNew';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path='/' element={<Navigate to='stores' />} />
          <Route path='/stores' element={<StorePage />} />
          <Route path='/store-new' element={<StoreNew />} />
          <Route path='/store/:id_store' element={<StoreNew />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
