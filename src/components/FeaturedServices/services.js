import React from 'react';
import './services.css'; // Import the CSS file

import serviceImage1 from './images/pngwing.com (41).png'; // Keep the original service images
import serviceImage2 from './images/pngwing.com (42).png';
import serviceImage3 from './images/pngwing.com (43).png';
import serviceImage4 from './images/pngwing.com (44).png';
import serviceImage5 from './images/pngwing.com (45).png';

class FeaturedServices extends React.Component {
  render() {
    const hospitalServices = [
      {
        title: 'Emergency Care',
        description: 'We provide immediate and responsive emergency medical care round the clock.',
        items: ['Trauma care', 'Critical care', 'Ambulance services'],
        image: serviceImage1,
      },
      {
        title: 'Specialized Surgery',
        description: 'Our skilled surgeons offer a wide range of specialized surgical procedures.',
        items: ['Cardiothoracic surgery', 'Neurosurgery', 'Orthopedic surgery'],
        image: serviceImage2,
      },
      {
        title: 'Maternity & Childcare',
        description: 'We offer comprehensive maternity and childcare services with a caring touch.',
        items: ['Prenatal care', 'Childbirth services', 'Pediatric care'],
        image: serviceImage3,
      },
      {
        title: 'Diagnostic Imaging',
        description: 'State-of-the-art imaging services for accurate diagnosis and treatment.',
        items: ['X-rays', 'MRI', 'CT scans'],
        image: serviceImage4,
      },
      {
        title: 'Cardiovascular Care',
        description: 'Comprehensive cardiovascular care for heart health and well-being.',
        items: ['Cardiac screenings', 'Interventional cardiology', 'Cardiac rehabilitation'],
        image: serviceImage5,
      },
    ];

    return (
      <section className="featured-services">
        <div className="container">
          <h2>Hospital Services</h2>
          <div className="services">
            {hospitalServices.map((service, index) => (
              <div className="service" key={index}>
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedServices;
