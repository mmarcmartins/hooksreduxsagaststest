import React from "react";
import RepositoryList from "./components/repository";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <RepositoryList />
      </Provider>
    </div>
  );
};

export default App;
