import "./App.css";
import { Router } from "./Router.jsx";
import SearchPage from "./pages/Search.jsx";
import { Route } from "./Route.jsx";
import { lazy, Suspense } from "react";

const LazyAboutPage = lazy(() => import("./pages/About.jsx"));
const LazyHomePage = lazy(() => import("./pages/Home.jsx"));

const appRoutes = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router routes={appRoutes}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
