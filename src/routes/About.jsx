import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About This Project</h2>
        <p>
          This project is a React Zoo App that allows users to explore information about animals, birds, fishes and butterflies.
        </p>
        <div className="about-features">
          <h2>Features Implemented:</h2>
          <ul>
            
            <li><Link to="/">Home </Link>Page with links to Animals, Birds, Fishes and Butterfly pages.</li>
            <li><Link to="/about">About </Link> Page providing information about the project.</li>
            <li><Link to="/animals">Animals </Link> Page listing all animals with a search feature.</li>
            <li><Link to="/birds">Birds</Link> Page listing all birds with a search feature.</li>
            <li><Link to="/fishes">Fishes </Link> Page listing all fishes with a search feature.</li>
            <li><Link to="/butterflies">Butterflies </Link> Page listing all butterflies with a search feature.</li>
            
          </ul>
        </div>
        <div className='learning'>
            <h2>Learning Outcomes:</h2>
        <p>
          While working on this project, I have learned...
        </p>
        <h3>React.js Proficiency:</h3>
        <p>Explored and deepened my understanding of React.js, gaining proficiency in building dynamic and interactive user interfaces.</p>


        <h3>Routing and Navigation:</h3>
        <p>Implemented efficient navigation and routing using React Router, allowing seamless transitions between different sections of the application.</p>


        <h3>State Management:</h3>
        <p>Gained hands-on experience in state management within React components, ensuring smooth data flow and updates across the application.</p>

        <h3>Responsive Design:</h3>

        <p>Focused on creating a responsive design to ensure a consistent and visually appealing user experience across various devices and screen sizes.</p>

        <h3>Search Functionality:</h3>

        <p>Implemented search functionality, allowing users to easily find specific animals and birds by name, enhancing the overall user experience.</p>

        <h3>CSS Styling:</h3>
        <p>Explored and applied modern CSS styling techniques to achieve an aesthetically pleasing and professional look for the application.</p>

        <h3>Project Structure and Organization:</h3>

        <p>Learned to structure the project effectively, organizing components and files for better code maintainability and scalability.</p>

        <h3>Debugging and Troubleshooting:</h3>

        <p>Developed skills in debugging and troubleshooting, addressing various challenges encountered during the development process.</p>
        <h3>Documentation Practices:</h3>

        <p>Emphasized the importance of clear and concise documentation to facilitate understanding and future maintenance of the codebase.</p>
        <h3>User Interface Design:</h3>

        <p>Explored principles of user interface design, aiming for a user-friendly and intuitive layout that enhances overall usability.</p>

        <h3>Version Control (Git):</h3>
        <p>Utilized version control with Git, code versioning, and the ability to revert to previous states if needed.</p>

        <h3>Continuous Learning:</h3>
        <p>Cultivated a mindset of continuous learning, staying updated with best practices and exploring new technologies within the ever-evolving field of web development.</p>

      </div>
    </div>
    </div>
  );
};

export default About;