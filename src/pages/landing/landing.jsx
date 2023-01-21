import React ,{Suspense}from 'react'
import Banner from '../../component/banner/banner'
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import Service from "../../component/service/service";
import Subset from "../../component/subset-ofmainservice/subset-ofmainservice";
import Case from "../../component/case_study/case_study";
// import Approach from "../../component/approach/approach";
// import Inquire from "../../component/Inquire/Inquire";
import Footer from "../../component/footer/footer";
import Menu from "../../component/sidemenu/sidemenu";
// import ServiceMenu from "../../component/serviceMenu/serviceMenu";
// import PricingMenu from "../../component/pricing/pricingMenu";
// import NavSideMenu from "../../component/navSidemenu/navSideMenu";
const NavSideMenu =React.lazy(()=>import('../../component/navSidemenu/navSideMenu'));
const Inquire =React.lazy(()=>import('../../component/Inquire/Inquire'));
const ServiceMenu =React.lazy(()=>import('../../component/serviceMenu/serviceMenu'));
const PricingMenu =React.lazy(()=>import('../../component/pricing/pricingMenu'));
const Approach =React.lazy(()=>import('../../component/approach/approach'));


function landing() {
  return (
    <div>
        <Suspense fallback={<h1>Loding ......</h1>}>
        <Banner/>
        <Breadcrumb/>
        <Service/>
        <Subset/>
        <Case/>
        <Approach/>
        <Inquire/>
        <Footer/>
        <Menu/>
        <ServiceMenu/>
        <PricingMenu/>
        <NavSideMenu/>
        </Suspense>
    </div> 
  )
}

export default landing