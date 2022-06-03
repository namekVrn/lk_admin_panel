import {
  fetchClientsLoading,
  fetchClients,
  fetchClientsError,
  addClientsLoading,
  clientsAdd,
  addClientsError,
  deleteClientsLoading,
  deleteClient,
  deleteClientsError,
  clientUpdate,
} from '../clients/action-clients';

import {
  fetchClientsApi,
  addClientApi,
  deleteClientApi,
  clientUpdateApi,

} from '../../components/utils/api';

export const fetchClientsGet = () => async dispatch => {
  dispatch(fetchClientsLoading());
  try {
    const clients = await fetchClientsApi();
    dispatch(fetchClients(clients));
  } catch {
    dispatch(fetchClientsError());
  }
};


// addClient
export const addClient = data => async dispatch => {
  const contacts = {
    ...data,
    date: new Date().toLocaleDateString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }),
  };
  dispatch(addClientsLoading());
  try {
    const client = await addClientApi(contacts);
    dispatch(clientsAdd(client));
  } catch {
    dispatch(addClientsError());
  }
  console.log();
};

//updateClient
export const updateClient = (data) => async dispatch => {
  // let num = await Number(idElem)
  console.log(data[0])
  // let obj = {num, redata} ;
  const updateClientItem = await clientUpdateApi(data[0])
  dispatch(await clientUpdate(updateClientItem))
  
  // dispatch(clientUpdate({...updateClientItem}))
}

//deleteClient
export const clientDelete = id => async dispatch => {
  dispatch(deleteClientsLoading());

  try {
    const deleteClientId = await deleteClientApi(id);
    dispatch(deleteClient(id));
    console.log(deleteClientId);
  } catch {
    deleteClientsError();
  }
};
