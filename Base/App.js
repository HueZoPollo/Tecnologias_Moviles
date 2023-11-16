import { Provider } from "react-redux";
import { store } from "./src/store";
import List from "./src/List";

export default function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}
