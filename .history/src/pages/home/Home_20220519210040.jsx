/** @format */

//components should be imported from here if needed
// make use of your normal import statement here to import components
// make use of the css module folder or tailwind or you can use inline styles
// check the sample on nav and footer for css modules
import Dashboard from "../../components/dashboard/Dashboard";
const Home = ({products}) => {



  return (
    <section className="md:ml-[200px] ml-0">
 <Dashboard products={products}/>
 </section>
  );
};

export default Home;
