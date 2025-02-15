import { TWResponsiveIndicator } from "./shared/store";
import { UserList } from "./pages/UserList";
import { AddUser } from "./pages/AddUser";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./shared/components/Navbar";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./shared/store/ThemProvider";
import { MyProvider } from "./shared/store/ContextProvider";

function App() {
  return (
    <>
      <MyProvider>
        <ThemeProvider>
          {/* <ThemeToggle /> */}
          <TWResponsiveIndicator />
          <Toaster />
          <div className="min-h-[100vh] w-full bg-radial-[at_20%_75%] from-gray-50 to-gray-300 text-gray-900 dark:from-gray-600 dark:to-gray-900 dark:text-white">
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<AddUser />} />
                <Route path="/WaitingDetail" element={<UserList />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </MyProvider>
    </>
  );
}

export default App;
