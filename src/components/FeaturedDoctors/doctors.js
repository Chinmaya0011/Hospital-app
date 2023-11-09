import React from 'react';
import './doctors.css'; // Import your CSS file
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Devi Shetty',
    speciality: 'Cardiology',
    experience: '40 years',
    education: 'MBBS, MS',
    totalCases: 5000,
    imageSrc: 'https://shorturl.at/fyRY5',
  },
  {
    id: 2,
    name: 'Dr. Naresh Trehan',
    speciality: 'Cardiac Surgery',
    experience: '35 years',
    education: 'MBBS, MS, FRCS',
    totalCases: 3000,
    imageSrc: 'https://shorturl.at/gkFU3',
  },
  {
    id: 3,
    name: 'Dr. Soumya Swaminathan',
    speciality: 'Infectious Diseases',
    experience: '25 years',
    education: 'MBBS, MD',
    totalCases: 1500,
    imageSrc: 'https://shorturl.at/pHIU1',
  },
  {
    id: 8,
    name: 'Dr. Randeep Guleria',
    speciality: 'Pulmonology',
    experience: '30 years',
    education: 'MBBS, MD',
    totalCases: 2000,
    imageSrc: 'https://shorturl.at/DJOR4',
  },
  {
    id: 9,
    name: 'Dr. M. S. Swaminathan',
    speciality: 'Agricultural Science',
    experience: '60 years',
    education: 'PhD',
    totalCases: 0,
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa8MsrAondvvUuMhlIzr13mo72P1X1gjSGTA&usqp=CAU',
  },
  {
    id: 10,
    name: 'Dr. Tessy Thomas',
    speciality: 'Rocket Science',
    experience: '25 years',
    education: 'MTech',
    totalCases: 0,
    imageSrc: 'https://shorturl.at/DJOR4',
  },
  {
    id: 11,
    name: 'Dr. Manohar Agnani',
    speciality: 'Neurosurgery',
    experience: '40 years',
    education: 'MBBS, MCh',
    totalCases: 800,
    imageSrc: 'https://shorturl.at/DJOR4',
  },
  // Add more Indian doctors...
];

// ... rest of the code remains the same ...

function DoctorProfile({ doctor }) {
  return (
    <div className="album">
      <img className="album__artwork" src={doctor.imageSrc} alt={`Doctor ${doctor.name}`} />
      <div className="album__details">
        <h2>{doctor.name}</h2>
        <p className="album__artist">{doctor.speciality}</p>
        <p className="album__desc">
          {doctor.experience}, {doctor.education}<br />
          Total Cases: {doctor.totalCases}
        </p>
        <a href="#" className="profile-link">
          Visit Profile
        </a>
      </div>
    </div>
  );
}

function App() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed (adjust as needed)
  };

  return (
    <div className="css-body">
      <h1 id="specilist-doc">Specialist Doctors</h1>
      <p>Explore our specialist doctors and their profiles.</p>

      <Slider {...settings}>
        {doctorsData.map((doctor) => (
          <DoctorProfile key={doctor.id} doctor={doctor} />
        ))}
      </Slider>
    </div>
  );
}

export default App;