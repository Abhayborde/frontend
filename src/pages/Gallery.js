import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      category: 'facilities',
      title: 'Main Hospital Building',
      image: '/assets/images/hospital-exterior.jpg'
    },
    {
      id: 2,
      category: 'facilities',
      title: 'Reception Area',
      image: '/assets/images/hospital-reception.jpg'
    },
    {
      id: 3,
      category: 'facilities',
      title: 'Patient Room',
      image: '/assets/images/patient-room.jpg'
    },
    {
      id: 4,
      category: 'facilities',
      title: 'Operation Theater',
      image: '/assets/images/operation-theater.jpg'
    },
    {
      id: 5,
      category: 'facilities',
      title: 'ICU',
      image: '/assets/images/icu.jpg'
    },
    {
      id: 6,
      category: 'facilities',
      title: 'Laboratory',
      image: '/assets/images/laboratory.jpg'
    },
    {
      id: 7,
      category: 'staff',
      title: 'Medical Team',
      image: '/assets/images/medical-team.jpg'
    },
    {
      id: 8,
      category: 'staff',
      title: 'Doctor Consultation',
      image: '/assets/images/doctor-consultation.jpg'
    },
    {
      id: 9,
      category: 'staff',
      title: 'Nursing Staff',
      image: '/assets/images/nursing-staff.jpg'
    },
    {
      id: 10,
      category: 'events',
      title: 'Health Camp',
      image: '/assets/images/health-camp.jpg'
    },
    {
      id: 11,
      category: 'events',
      title: 'Medical Conference',
      image: '/assets/images/medical-conference.jpg'
    },
    {
      id: 12,
      category: 'events',
      title: 'Community Outreach',
      image: '/assets/images/community-outreach.jpg'
    }
  ];

  const [filter, setFilter] = React.useState('all');
  const [filteredItems, setFilteredItems] = React.useState(galleryItems);

  React.useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === filter));
    }
  }, [filter]);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Photo Gallery</h1>
        <p>Explore Our Hospital Facilities and Activities</p>
      </div>

      <div className="gallery-filter">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'facilities' ? 'active' : ''} 
          onClick={() => setFilter('facilities')}
        >
          Facilities
        </button>
        <button 
          className={filter === 'staff' ? 'active' : ''} 
          onClick={() => setFilter('staff')}
        >
          Medical Staff
        </button>
        <button 
          className={filter === 'events' ? 'active' : ''} 
          onClick={() => setFilter('events')}
        >
          Events
        </button>
      </div>

      <div className="gallery-grid">
        {filteredItems.map(item => (
          <div className="gallery-item" key={item.id}>
            <div className="gallery-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="gallery-caption">
              <h3>{item.title}</h3>
              <span className="gallery-category">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
