import { Provider } from "react-redux";
import store from "./redux/store";
import Navigation from "./Routes/Navigation";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
