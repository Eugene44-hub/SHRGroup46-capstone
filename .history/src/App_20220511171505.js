import { lazy, Suspense } from "react";
const Nav=lazy(()=>import('./components/nav/Nav'));
// const Home=lazy(()=>import('./pages/home/Home'));
function App() {
  return (
    <div className="App">
<Suspense fallback={<h1>Loading...</h1>}>

</Suspense>
    </div>
  );
}

export default App;
