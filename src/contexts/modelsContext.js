import React, { useReducer } from "react";
import axios from "axios";

import { CASE_GET_MODELS } from "../helpers/cases";
import { MODELS_API } from "../helpers/consts";

export const modelsContext = React.createContext();

const INIT_STATE = {
  models: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_MODELS:
      return { ...state, models: action.payload.data };
    default:
      return state;
  }
};

const ModelsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createModel(newModel) {
    await axios.post(MODELS_API, newModel);
    getModels();
  }
  async function getModels() {
    let result = await axios.get(MODELS_API);
    dispatch({
      type: CASE_GET_MODELS,
      payload: result,
    });
  }

  async function deleteModel(id) {
    await axios.delete(`${MODELS_API}/${id}`);
    getModels();
  }

  return (
    <modelsContext.Provider
      value={{
        models: state.models,
        getModels,
        deleteModel,
        createModel,
      }}
    >
      {children}
    </modelsContext.Provider>
  );
};
export default ModelsContextProvider;