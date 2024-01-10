import React from 'react';
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Background from "../components/shared/Background";
import OrderList from '../components/order/OrderList';

function Profile() {
  return (
    <div className="wrapper">
      <Background />
      <Header />
      <OrderList header="Orders History"/>
      <Footer />
    </div>
  )
}

export default Profile
