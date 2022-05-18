import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";

//read through comments on each component and pages to understand properly 

// only tailwind and css modules are used in this project, any additional libraries should be told to the lead before installation

//Note: you can use normal import statement on the pages. Lazy load is for only Routing pages

// API's too have been fetched in utility folder you can import and use with the syntax below

import { fetchAllData,fetchCompanyQuantity,fetchPersonQuantity,fetchProductQuantity } from "./utilities/apis";
// fetchAllData(input endpoint here to fetch all data).then(data =>console.log(data) )
// fetchPersonQuantity(input quantity here to fetch an amount of data).then(data =>console.log(data) )
// fetchProductQuantity(input quantity here to fetch an amount of data).then(data =>console.log(data) )
// fetchCompanyQuantity(input quantity here to fetch an amount of data).then(data =>console.log(data) )

// endpoints are as follows:
// https://fakerapi.it/api/v1/products?_quantity=1
// https://fakerapi.it/api/v1/companies?_quantity=1
// https://fakerapi.it/api/v1/persons?_quantity=10
// https://fakerapi.it/api/v1/products
// https://fakerapi.it/api/v1/companies
// https://fakerapi.it/api/v1/persons

// check utilities folder for more details on the api functions

// happy coding


const Nav=lazy(()=>import('./components/nav/Nav'));
const Home=lazy(()=>import('./pages/home/Home'));
const Dashboard=lazy(()=>import('./pages/dashboard/Dashboard'))
const Members=lazy(()=>import('./pages/members/Members'))
const Product=lazy(()=>import('./pages/product/Product'))
const Login=lazy(()=>import('./pages/login/Login'))
const Footer=lazy(()=>import('./components/footer/Footer'))



function App() {
  const [members,setMembers]=useState()

  useEffect(() => {
    fetchAllData("https://fakerapi.it/api/v1/persons").then(data =>setMembers(data) )
console.log(members)
  
  }, [])
  

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
