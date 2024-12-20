import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./global/store";

let persistor = persistStore(store);
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />{" "}
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
