import React, {useState} from "react";
import NavbarAlt from "../shared/NavbarAlt";
import Footer from "../shared/Footer";
import '../styles/components/research.scss';

const researchProjects = [
  /*{
    title: "Project MATRIX",
    project_manager: "Ty Swanson",
    analysts: "Mateo, Julian, Muhammad, Aryan, Will, Ephraim",
    abstract: "Project MATRIX is a comprehensive analysis of the 2024-2025 NBA season, focusing on player performance, team dynamics, and game strategies. Utilizing advanced statistical methods and machine learning algorithms, we aim to uncover hidden patterns and insights that can inform coaching decisions and enhance team performance.",
    date: "Spring 2025",
    image: "research/flights.png",
    presentation: "https://docs.google.com/presentation/d/1g0v2r7q3x4k5j6l8h9k0m1n2o3p4q5r6/edit?usp=sharing",
 },
 {
    title: "American Options Pricing",
    project_manager: "Cameron Worden",
    analysts: "Aidan, Anish, Aryan, Daniel, Ethan, Keshav",
    abstract: "This project focuses on the pricing of American options using advanced mathematical models and computational techniques. By analyzing historical data and market trends, we aim to develop a robust pricing model that can accurately reflect the complexities of American options in today's financial markets.",
    date: "Fall 2024",
    image: "research/flights.png",
    presentation: "https://docs.google.com/presentation/d/1g0v2r7q3x4k5j6l8h9k0m1n2o3p4q5r6/edit?usp=sharing",
 },*/
  {
    title: "Flights of the Future",
    project_manager: "Diya Patel",
    analysts: "Cole Rutherford, Leo Ledlow, Tess Prutow, Alyssa Kim, Zach Shah, Chris Tengey", 
    abstract: "Flights of the Future is an innovative project that explores the future of air travel through data analysis and predictive modeling. By examining historical flight data and emerging trends in aviation technology, we aim to forecast the evolution of air travel and its impact on global connectivity.",
    date: "Spring 2024",
    image: "research/flights.png",
    presentation: "/research/slides/flights.pdf",
  },
  {
    title: "Big Brother",
    project_manager: "Sazan Khalid",
    analysts: "Chris Bond, Caitln Dovel, Cameron Worden, Jimmy Angelos, Ty Swanson", 
    abstract: "Big Brother is a real-time computer vision-based interview assessment tool developed by the Hoyalytics. By leveraging OpenCV, MediaPipe, and DeepFace, the tool analyzes key visual cues—such as facial expressions, head and hand movement, eye tracking, blinking, and speech patterns—to assess confidence, nervousness, and engagement during interviews. It processes both live and recorded footage, providing standardized feedback through a combination of summary insights and detailed visualizations.",
    date: "Spring 2024",
    image: "research/big_brother.png",
    presentation: "/research/slides/big_brother.pdf",
  }
];

const Research = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = () => setSelectedProject(null);

  return (
    <div>
      <div className="research">
        <NavbarAlt />
        <div className="research-header">
          <h1>Independent Research Projects</h1>
          <p>This page highlights our independent research initiatives led by members of our team, drawing on real-world data and academic rigor.</p>
          <a
            href="https://medium.com/hoyalytics"
            target="_blank"
            rel="noopener noreferrer"
            className="medium-link"
          >
            Visit our Medium ↗
          </a>
        </div>
        <div className="research-grid">
          {researchProjects.map((project, index) => (
            <div
              className="research-card"
              key={index}
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-image">
                <img src={project.image} alt={project.subtitle} />
              </div>
              <div className="card-text">
                <h3>{project.title}</h3>
                <p className="date">{project.date}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
        <div className="research-modal-overlay" onClick={handleCloseModal}>
          <div 
            className="research-modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close-btn" 
              onClick={handleCloseModal}
            >
              ×
            </button>
            <div className="modal-header">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="modal-image"
              />
              <div className="modal-title-section">
                <h2>{selectedProject.title}</h2>
                <p className="modal-date">{selectedProject.date}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-team-info">
                <div className="team-section">
                  <h4>Project Manager</h4>
                  <p>{selectedProject.project_manager}</p>
                </div>
                <div className="team-section">
                  <h4>Research Analysts</h4>
                  <p>{selectedProject.analysts}</p>
                </div>
              </div>
              <div className="modal-abstract">
                <h4>Project Abstract</h4>
                <p>{selectedProject.abstract}</p>
              </div>
              <div className="modal-actions">
                <a 
                  href={selectedProject.presentation} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="presentation-link"
                >
                  View Presentation ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
      <Footer />
    </div>
  );
};

export default Research;
