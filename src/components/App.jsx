import { Route, Link, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './Main/Main';
import TarifsUsers from './TarifsUsers/TarifsUsers';
import AddClients from './AddClients/AddClients';
import Tickets from './Tickets/Tickets';
import ClientList from './ClientList/ClientList';
import ClientCard from './ClientCard/ClientCard';

import 'antd/dist/antd.css'
import '../components/app.css'
export const App = () => {
  return (
    <div className="center">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/tarifs" element={<TarifsUsers />} />
          <Route path="/addClients" element={<AddClients />} />
          <Route path="/clientList" element={<ClientList />} />
          <Route path="/clientList/:idElem/" element={<ClientCard/>}/>
          <Route path="/tickets" element={<Tickets />} />
          <Route path="*" element={<p>not found</p>} />
        </Route>
      </Routes>
    </div>
  );
};
