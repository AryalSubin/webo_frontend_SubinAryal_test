import React from 'react'
import monday from '../../assets/companies/monday.png';
import morpheus from '../../assets/companies/morpheus.png';
import oracle from '../../assets/companies/oracle.png';
import Oz from '../../assets/companies/Oz.png';
import protonet from '../../assets/companies/protonet.png';
import samsung from '../../assets/companies/samsung.png';
import segment from '../../assets/companies/segment.png';
import  "./companies.css";

const Companies = () => {
  return (
    <div className='companies_container'>
        <h2>Over 32k+ software businesses growing with AR Shakir.</h2>
        <marquee className='companies_list' direction="right" scrollamount= "20" >
            <img src={Oz} alt="" />
            <img src={oracle} alt="" />
            <img src={morpheus} alt="" />
            <img src={samsung} alt="" />
            <img src={monday} alt="" />
            <img src={segment} alt="" />
            <img src={protonet} alt="" />
        </marquee>
    </div>
  )
}

export default Companies