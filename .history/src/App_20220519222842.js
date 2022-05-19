import React from 'react'
import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";

import loader from "./assests/images/loading.gif"

import ProtectedRoute from './components/ProtectedRoute';


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
const Members=lazy(()=>import('./pages/members/Members'))
const Product=lazy(()=>import('./pages/product/Product'))
const Login=lazy(()=>import('./pages/login/Login'))



const quantity = 12;
function App() {

  const[products, setProducts] = useState('')
  const [members,setMembers]=useState(null)

  useEffect(() => {
    fetchProductQuantity(quantity).then(data =>setProducts(data.data) )
    fetchAllData("https://fakerapi.it/api/v1/persons").then(data =>setMembers(data))
  }, [])

const [showNav,setShowNav]=useState(false)

const handleNav=()=>{
  setShowNav(!showNav)
}

  return (
    <div className="App">

<Suspense fallback={<div className='fixed h-full w-full flex'><img src={loader} className='m-auto' alt="" /></div>}>
  <Router>
    <div className=''>
<Routes>
<Route element={<ProtectedRoute />}>
    <Route path="/*" element={<>
      <Nav showNav={showNav} handleNav={handleNav}/>
      <div className='text-center'>{sessionStorage.getItem('Details').email}</div>

    <Home products={products}/>
    </>
    } />
    <Route path="/members" element={
    <>
      <Nav showNav={showNav} handleNav={handleNav}/>

    <Members members={members}/>
    </>} />
    <Route path="/product" element={<>  <Nav showNav={showNav} handleNav={handleNav}/>
<Product products = {products}/></>} />
</Route>
<Route path="/login" element={<Login/>} />
</Routes>
</div>
</Router>
</Suspense>
    </div>
  );
}

export default App;
