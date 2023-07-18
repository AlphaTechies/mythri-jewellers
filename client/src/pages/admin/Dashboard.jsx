import {IoMenuSharp} from 'react-icons/io5'
const Dashboard = () => {
  return <div className="pt-24 mx-auto  flex">
    <div className="h-full bg-[#f1c96d] w-1/4">
      <div>
        <IoMenuSharp/>
      </div>
      <div>
        <ul>
          <li>Products</li>
          <li>Reviews</li>
          <li>Reviews</li>
          <li>Reviews</li>
          <li>Reviews</li>
        </ul>
      </div>
    </div>
    <div className='bg-[#e1c88d]'>
      Dashboard
    </div>
  </div>;
};

export default Dashboard;
