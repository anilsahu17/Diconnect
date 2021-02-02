import React from 'react';
import Header from '../../Layouts/Header/header';
import Footer from '../../Layouts/Footer/footer';

class Dashboard extends Components{

   render(){
       return(
         <div className="Page">
              <Header></Header>
              <Footer></Footer>
         </div>
        );
   }
    

};

export default Dashboard;