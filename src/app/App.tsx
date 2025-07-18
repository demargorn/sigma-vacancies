import { Route, Routes } from 'react-router';
import Sidebar from '@/widgets/Sidebar/Sidebar';
import Login from '@/pages/Login/Login';
import Vacancies from '@/pages/Vacancies/Vacancies';
import CreateNewVacancy from '@/pages/CreateNewVacancy/CreateNewVacancy';

const App = () => {
   return (
      <>
         <Sidebar />
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/login/passwordChange" element={<Login />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/vacancies/create" element={<CreateNewVacancy />} />
         </Routes>
      </>
   );
};

export default App;
