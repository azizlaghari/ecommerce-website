import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductListing from '../pages/ProductListing'
import ProductCategoryDetails from '../pages/ProductCategoryDetails'
import ProductDetails from '../pages/ProductDetails'
import MyOrders from '../pages/MyOrders'
import ProductCartDetails from '../pages/ProductCartDetails'
import PrintInformation from '../pages/PrintInformation'
// import PrivateWrapper from './PrivateRoutes'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Uncommit next line to apply token security */}
        {/* <Route element={<PrivateWrapper />}> */}
        <Route path='/' element={<Dashboard />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product-listing' element={<ProductListing />} />
        <Route path='/product-category-details' element={<ProductCategoryDetails />} />
        <Route path='/product-details' element={<ProductDetails/>} />
        <Route path='/my-orders' element={<MyOrders/>} />
        <Route path='/product-cart-details' element={<ProductCartDetails/>} />
        <Route path='/print-information' element={<PrintInformation/>} />
        <Route path='*' element={<Navigate to='/' />} />
        {/* </Route> */}

        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
