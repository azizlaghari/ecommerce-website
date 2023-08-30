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
import Quotation from '../pages/Quotation'
import OrderSuccessfull from '../pages/OrderSuccessfull'
import ThankYou from '../pages/ThankYou'
import ManufacturesDetails from '../pages/ManufacturesDetails'
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
        <Route path='/quotation' element={<Quotation/>} />
        <Route path='/manufactures-details' element={<ManufacturesDetails/>} />
        <Route path='/order-successfull' element={<OrderSuccessfull/>} />
        <Route path='/thank-you' element={<ThankYou/>} />
        <Route path='*' element={<Navigate to='/' />} />
        {/* </Route> */}

        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
