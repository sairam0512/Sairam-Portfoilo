// Import the local images from the assets folder
// The path "../assets/" assumes this file is inside "src/data/"
import faceImg from "../assets/face.png";
import plagImg from "../assets/plag.png";

export const projects = [
  {
    title: "Face Recognition System",
    image: faceImg, // Using the imported variable
    desc: "A security system using OpenCV to detect and recognize faces in real-time for automated attendance.",
    tech: ["Flask", "OpenCV", "TensorFlow"],
    github: "https://github.com/iprashanthvanam/face_recognition_system",
    demo: "https://iprashanthvanam.pythonanywhere.com/"
  },
  {
    title: "Plagiarism Analysis Application",
    image: plagImg, // Using the imported variable
    desc: "A tool that analyzes text similarity against a database to detect content duplication.",
    tech: ["Python", "React", "Node.js"],
    github: "https://github.com/iprashanthvanam/plagiarism_analysis_app",
    demo: "https://plagiarismanalyser-d8a6d0f9f2deczhn.southindia-01.azurewebsites.net/"
  }
];
