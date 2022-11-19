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
        <ul className='companies_list'>
            <li><img src={Oz} alt="" /></li>
            <li><img src={oracle} alt="" /></li>
            <li><img src={morpheus} alt="" /></li>
            <li><img src={samsung} alt="" /></li>
            <li><img src={monday} alt="" /></li>
            <li><img src={segment} alt="" /></li>
            <li><img src={protonet} alt="" /></li>
        </ul>
    </div>
  )
}

export default Companies