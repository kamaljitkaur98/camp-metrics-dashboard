import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Campaign from "./scenes/campaign";
import Contacts from "./scenes/contacts";

import Spends from "./scenes/spends";
// import Bar from "./scenes/global/bar";
// import Form from "./scenes/global/form";
// import Line from "./scenes/global/line";
// import Pie from "./scenes/global/pie";
// import FAQ from "./scenes/global/faq";
// import Geography from "./scenes/global/geography";

import Dashboard from "./scenes/dashboard"
// import Dashboard from "./scenes/Calendar"


function App() {

  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/campaigns" element={<Campaign />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/spends" element={<Spends />} />
                {/* <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} /> */}
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
