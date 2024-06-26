import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './ExploreClassesPage.css';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import image from '../../Images/Card.png';
import Card from '../../Components/Card/Card';



const ExploreClassesPage = () => {


    const [isCategaryDropdownOpen, setCategaryDropdownOpen] = useState(false);

  const toggleCategaryDropdown = () => {
    setCategaryDropdownOpen(!isCategaryDropdownOpen);
    };


  const [isTopicDropdownOpen, setTopicDropdownOpen] = useState(false);

  const toggleTopicDropdown = () => {
    setTopicDropdownOpen(!isTopicDropdownOpen);
  };
    
  return (
    <div className='ExploreClassesPage'>
      <div className="explore-classes-page-header">
        <div className="title">
          <span className='card-title'>Explore Classes</span>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search classes on SpaceEd" />
          <button type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="category">
      <div className="list-butt">
        <input
          type="text"
          placeholder="Category..."
          onClick={toggleCategaryDropdown}
          readOnly
                  />
                   <button onClick={toggleCategaryDropdown} type="button">
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
            </div>      
                     
        {isCategaryDropdownOpen && (
          <ul className="dropdown-list">
            {/* Add your list items here */}
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        )}
        
        
      
    </div>
        <div className="topic">
          <div className="list-butt">
        <input
          type="text"
          placeholder="Topic..."
          onClick={toggleTopicDropdown}
          readOnly
                  />
                   <button onClick={toggleTopicDropdown} type="button">
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
            </div>      
                     
        {isTopicDropdownOpen && (
          <ul className="dropdown-list">
            {/* Add your list items here */}
            <li>Topoic 1</li>
            <li>Topoic 2</li>
            <li>Topoic 3</li>
          </ul>
        )}
        
        
        </div>
      </div>
          <div className="explore-classes-page-cards">
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
                  <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
      </div>
    </div>
  );
};

export default ExploreClassesPage;
