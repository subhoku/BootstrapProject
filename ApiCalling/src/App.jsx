import React from 'react';
import Footer from './footer';
//import ShoppingComponent from './shoppingcomponent';
//import EcommList from './ecommlook';
import EventBinding from './TwowayBinding';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
 

  return (
    <>
<Header/>
   <EventBinding/>
  <Footer/>
   </>
  );
}


