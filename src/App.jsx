import { Navigate, Route, Routes } from 'react-router-dom';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import PageFive from './pages/PageFive';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/one" replace />} />
      <Route path="/one" element={<PageOne />} />
      <Route path="/two" element={<PageTwo />} />
      <Route path="/three" element={<PageThree />} />
      <Route path="/four" element={<PageFour />} />
      <Route path="/five" element={<PageFive />} />
      <Route path="*" element={<Navigate to="/one" replace />} />
    </Routes>
  );
}
