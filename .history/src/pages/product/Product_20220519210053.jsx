import React from 'react'
import Currency from 'react-currency-formatter';
import styles from './Product.module.css'
//components should be imported from here if needed
// make use of your normal import statement here to import components
// make use of the css module folder or tailwind or you can use inline styles
// check the sample on nav and footer for css modules

const Product = ({products}) => {

  
  return (
    <section className="md:ml-[200px] ml-0">
     <h1 className='text-center text-2xl font-medium my-4'>PRODUCTS</h1>
      <div className='m-4 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {products && products.map((product) => (
           <div className={`${styles.container} pt-5  flex flex-col items-center justify-center rounded-md hover:bg-gray-100 transition-all duration-300  hover:scale-95`} key={product.id}>
                <div className=''>
                    <img src={product.image} className="w-[100px] h-[100px] bg-transparent rounded-full" alt="/" />
                </div>
                <div className='px-2 mt-5 w-full'>
                  <div className='flex items-center px-2 rounded-md justify-between py-1 bg-gray-100'>
                      <p className='tax'>Product Name</p>
                      <p className='taxPrice'>{product.name.substring(0, 15)}</p>
                  </div>
                  <div className='flex items-center px-2 bg-white rounded-md justify-between py-1 '>
                      <p className='tax'>Price</p>
                      <p className='taxPrice'><Currency quantity={+product.price} currency="NGN" /></p>
                  </div>
                  <div className='flex items-center px-2 rounded-md justify-between py-1 bg-gray-100'>
                      <p className='tax'>Net Price</p>
                      <p className='taxPrice'><Currency quantity={+product.net_price} currency="NGN" /></p>
                  </div>
                  <div className='flex items-center px-2 rounded-md bg-white justify-between py-1 text-red-600'>
                      <p className='tax'>Tax</p>
                      <p className='taxPrice'><Currency quantity={+product.taxes} currency="NGN" /></p>
                  </div>
                  
                </div>
            </div>
        ))} 

            
       
      </div>
    </section>
  )
}

export default Product