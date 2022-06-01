import { createAction } from "@reduxjs/toolkit";
//fetch clients
export const fetchClientsLoading = createAction("clients/fetchClientsLoading");
export const fetchClients = createAction("clients/fetchClients");
export const fetchClientsError = createAction("clients/fetchClientsError");

//fetch client info
export const fetchClientLoading = createAction("clients/fetchClientLoading");
export const fetchClient = createAction("clients/fetchClient");
export const fetchClientError = createAction("clients/fetchClientError");


//addClients
export const addClientsLoading = createAction("clients/addClientsLoading");
export const clientsAdd = createAction("clients/addClients");
export const addClientsError = createAction("clients/addClientsError");

//updateClient
export const updateClientLoading = createAction("clients/updateClientsLoading");
export const clientUpdate = createAction("clients/updateClients");
export const updateClientError = createAction("clients/updateClientsError");

//deleteClient
export const deleteClientsLoading = createAction("clients/deleteClientLoading");
export const deleteClient = createAction("delete/addClient");
export const deleteClientsError = createAction("clients/deleteClientError");

