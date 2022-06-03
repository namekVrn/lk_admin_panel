import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchClientsLoading,
  fetchClients,
  fetchClientsError,

  clientsAdd,
  addClientsLoading,
  addClientsError,

  deleteClient,
  deleteClientsError,
  deleteClientsLoading,

  // updateClientLoading,
  clientUpdate,
  // updateClientError,
} from '../clients/action-clients';

const itemsReducer = createReducer([], {
  [fetchClients]: (state, { payload }) => payload,
  [clientsAdd]: (store, { payload }) => [payload, ...store],
  [deleteClient]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
    [clientUpdate]: (state, {payload}) => console.log(payload)

});
 

const loading = createReducer(false, {
  [fetchClients]: () => false,
  [fetchClientsLoading]: () => true,
  [fetchClientsError]: () => false,
  [clientsAdd]: () => false,
  [addClientsLoading]: () => true,
  [addClientsError]: () => false,
  [deleteClient]: () => false,
  [deleteClientsLoading]: () => true,
  [deleteClientsError]: () => false,
});

const clients = combineReducers({
  client: itemsReducer,
  loading,
});

export default clients;
