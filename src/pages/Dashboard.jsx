import React from 'react'
import TopProducts from '../Components/TopProducts'
import ProductOverview from '../Components/Product-overview'
import BestSellers from '../Components/Best-sellers'
import Navbar2 from '../Components/Navbar2'

const Dashboard = () => {
  return (
    <div>
<Navbar2/>
<ProductOverview/>
<TopProducts/>
<BestSellers/>

    </div>
  )
}

export default Dashboard