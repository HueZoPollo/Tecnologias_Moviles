import "react-native-gesture-handler";
import AuthContextProvider from "./src/Context/AuthContext";
import Layout from "./src/layout/Layout";

export default function App() {
  return (
    <AuthContextProvider>
      <Layout />
    </AuthContextProvider>
  );
}
