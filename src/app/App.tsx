import Sidebar from '@/widgets/Sidebar/Sidebar';
import Vacancies from '@/pages/Vacancies/Vacancies';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <>
      <Sidebar />

      <Routes>
        <Route path="/vacancies" element={<Vacancies />} />
      </Routes>
    </>
  );
};

export default App;
