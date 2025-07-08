import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const TourCreation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const sectionTabs = [
    {
      id: 1,
      name: 'Basic Info'
    },
    {
      id: 2,
      name: 'Details'
    },
    {
      id: 3,
      name: 'Content'
    },
    {
      id: 4,
      name: 'SEO'
    },
    {
      id: 5,
      name: 'Destination & Others'
    },

  ]
  return (
    <div className='admin-content-main'>
      <div className='d-flex justify-content-between'>
        <h3 className='my-auto'>Create Tour</h3>

        <button className='admin-add-button'>Create Tour</button>
      </div>

      <div className='creta-tour-parent'>
        {sectionTabs.map((item, index) => (
          <div className={`create-tour-main ${activeTab === index ? 'active' : ''}`} key={item.id}
            onClick={() => setActiveTab(index)}>
            <a>{item?.name}</a>
          </div>
        ))}
      </div>

      <div className='mt-3'>

        <div>
          ``
        </div>

      </div>


    </div>
  )
}

export default TourCreation
