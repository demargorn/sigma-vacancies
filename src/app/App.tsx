import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Sidebar from '@/widgets/Sidebar/Sidebar';
import Login from '@/pages/Login/Login';
import Main from '@/pages/Main/Main';
import Vacancies from '@/pages/Vacancies/Vacancies';
import CreateNewVacancy from '@/pages/CreateNewVacancy/CreateNewVacancy';
import ActiveVacancies from '@/pages/ActiveVacancies/ActiveVacancies';
import NotFound from '@/pages/NotFound/NotFound';

const App = () => {
   const navigate = useNavigate();

   useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken && accessToken !== 'undefined') {
         return;
      } else {
         navigate('/login'),
            {
               state: {
                  prevUrl: location.pathname
               }
            };
      }
   }, []);

   return (
      <>
         <Sidebar />
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/login/passwordChange" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/vacancies/create" element={<CreateNewVacancy />} />
            <Route path="/vacancies/edit/:id" element={<CreateNewVacancy />} />
            <Route path="/active-vacancies" element={<ActiveVacancies />} />
            <Route path="/active-vacancies/:id" element={<ActiveVacancies />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </>
   );
};

export default App;
