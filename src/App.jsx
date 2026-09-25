import { appRouter } from "./routes/AppLayout";
import { Provider } from "react-redux";
import appStore from "./redux/Store/appStore";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;