import "./App.css";

import React, {useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
const pageSize = 15;
const  apiKey = process.env.REACT_APP_NEWS_API
const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          <Routes>
            {/* Default category */}
            <Route
              path="/"
              element={
                <News
                 setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="us"
                  category="general"
                />
              }
            />

            {/* Different categories */}
            <Route
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  pageSize={pageSize}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News 
                setProgress={setProgress} 
                apiKey={apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                setProgress={setProgress} 
                apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News 
                setProgress={setProgress}
                 apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News 
                setProgress={setProgress} 
                apiKey={apiKey}
                  key="sports"
                  pageSize={pageSize}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                 setProgress={setProgress} 
                 apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
export default App
