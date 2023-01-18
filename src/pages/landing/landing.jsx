import React from 'react'
import Banner from '../../component/banner/banner'
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import Service from "../../component/service/service";
import Subset from "../../component/subset-ofmainservice/subset-ofmainservice";
import Case from "../../component/case_study/case_study";
import Approach from "../../component/approach/approach";
import Inquire from "../../component/Inquire/Inquire";
import Footer from "../../component/footer/footer";
import Menu from "../../component/sidemenu/sidemenu";


function landing() {
  return (
    <div>
        <Banner/>
        <Breadcrumb/>
        <Service/>
        <Subset/>
        <Case/>
        <Approach/>
        <Inquire/>
        <Footer/>
        <Menu/>
    </div> 
  )
}

export default landing