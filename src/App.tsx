import Router from "./routes";
import DataContextProvider from "./context/dataContext";
import AuthContextProvider from "./context/authContext";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <DataContextProvider>
      <AuthContextProvider>
        <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          draggable
          theme="dark"
          transition={Slide}
        />
        <Router />
      </AuthContextProvider>
    </DataContextProvider>
  );
}

export default App;
