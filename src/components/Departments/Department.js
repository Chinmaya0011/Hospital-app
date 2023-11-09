import React from 'react';
import './Department.css'; // Import the CSS file (if any)

// Define department data
const departmentsData = [
    {
        title: 'Dentistry',
        description: 'Experienced dentists providing comprehensive dental care.',
        image: require('./images/denstiory.png'),
        details: ['Experienced dentists', 'State-of-the-art equipment', 'Cosmetic and general dentistry'],
    },
    {
        title: 'Dermatology',
        description: 'Expert dermatologists offering medical and cosmetic treatments.',
        image: require('./images/dermology1.png'),
        details: ['Experienced dermatologists', 'Medical and cosmetic treatments', 'Skin condition evaluations'],
    },
    {
        title: 'Orthopadis',
        description: 'Skilled orthopedic surgeons specializing in joint replacement and sports injury treatments.',
        image: require('./images/oprthomoly (2).png'),
        details: ['Skilled orthopedic surgeons', 'Joint replacement surgeries', 'Sports injury treatments'],
    },
    {
        title: 'Eye Care',
        description: 'Comprehensive eye care services by expert eye care specialists.',
        image: require('./images/orth1.png'),
        details: ['Expert eye care specialists', 'Comprehensive eye exams', 'Advanced diagnostics'],
    },
    // Add more department objects here
];

const DepartmentSection = () => {
    return (
        <div className="department-section">
            <h2>Departments</h2>
            <div className="department-container">
                {departmentsData.map((department, index) => (
                    <div className="department-card" key={index}>
                        <h3>{department.title}</h3>
                        <img src={department.image} alt={department.title} />
                        <p>{department.description}</p>
                        <ul>
                            {department.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                            ))}
                        </ul>
                        <button className="get-quote-button">Get Quote</button> {/* Add the button */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DepartmentSection;
