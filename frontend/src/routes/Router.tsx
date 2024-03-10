import { Route, Routes } from "react-router-dom";

import { Home } from "@/pages";
import { Provider } from "react-redux";
import store from "@/app/store";

export default function Router() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
}
