import React from 'react';
import face from '../../../assets/icons/Group 1373.png';
import hair from '../../../assets/icons/Group 1372.png';
import skin  from '../../../assets/icons/Group 1374.png';
import Service from './Service/Service';
const Services = () => {
    const  servicesItems =[
        {
            id: 1,
            title: 'Anti Age Face Treatment',
            price: 199,
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            image: face,
        },
        {
            id: 1,
            title: 'Hair Color & Styleing',
            price: 99,
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            image: hair,
        },
        {
            id: 1,
            title: 'Skin Care Treatment',
            price: 299,
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            image: skin,
        }
    ]
    return (
       <section className='mt-20'>
         <div className='bg-white'>
            <div>
                <h1 className='text-black font-bold text-4xl'>Our Awesome <span className='text-4xl font-bold text-rose-600'>Services</span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                {
                    servicesItems?.map(service =>  <Service key={service.id}
                     service={service}
                    ></Service>)
                }
            </div>
        </div>
       </section>
    );
};

export default Services;