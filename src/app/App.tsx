import { Route, Routes } from 'react-router';
import Sidebar from '@/widgets/Sidebar/Sidebar';
import Vacancies from '@/pages/Vacancies/Vacancies';
import CreateNewVacancy from '@/pages/Vacancies/CreateNewVacancy/CreateNewVacancy';

const App = () => {
  return (
    <>
      <Sidebar />

      <Routes>
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/vacancies/create" element={<CreateNewVacancy />} />
      </Routes>
    </>
  );
};

export default App;
