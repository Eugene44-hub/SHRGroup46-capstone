import { lazy, Suspense } from "react";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import { fetchCompanyData, fetchPersonData, fetchProductData } from "./utilities/apis";

//read through comments on each component and pages to understand properly 

// only tailwind and css modules are used in this project, any additional libraries should be told to the lead before installation

//Note: you can use normal import statement on the pages. Lazy load is for only Routing pages

// API's too have been fetched in utility folder you can import and use with the syntax below

fetchPersonData.then(data=>console.log(data))
fetchCompanyData.then(data=>console.log(data))
fetchProductData.then(data=>console.log(data))

// happy coding

const Nav=lazy(()=>import('./components/nav/Nav'));
const Home=lazy(()=>import('./pages/home/Home'));
const Dashboard=lazy(()=>import('./pages/dashboard/Dashboard'))
const Members=lazy(()=>import('./pages/members/Members'))
const Product=lazy(()=>import('./pages/product/Product'))
const Login=lazy(()=>import('./pages/login/Login'))
const Footer=lazy(()=>import('./components/footer/Footer'))



function App() {
  return (
    <div className="App">

<Suspense fallback={<h1>Loading...</h1>}>
  <Nav/>
  <Router>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/product" element={<Product/>} />
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/login" element={<Login/>} />
<Route path="/members" element={<Members/>} />
</Routes>
</Router>
<Footer/>
</Suspense>
    </div>
  );
}

export default App;
