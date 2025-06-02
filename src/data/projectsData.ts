import { Project } from '../components/ProjectCard';

export const projects: Project[] = [
  {
    title: 'YouTube/Netflix  Clone',
    description: 'A scalable YouTube clone with Flutter frontend and FastAPI backend. Features secure authentication, video transcoding, and adaptive bitrate streaming.',
    image : 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Full Stack'],
    technologies: ['Flutter', 'FastAPI', 'AWS', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/TexZ-GenZ/Youtube-Clone-'
  },
  {
    title: 'Spotify Clone',
    description: 'A full-stack Spotify-like music streaming application featuring user authentication, music upload, recent plays, liked songs, and an immersive music player.',
    image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&w=1260&h=750&q=80',
    categories: ['Mobile'],
    technologies: ['Dart', 'Flutter', 'Firebase', 'Cloud Functions'],
    githubUrl: 'https://github.com/TexZ-GenZ/Spotify-Clone'
  },
  {
    title: 'SAR Image Colorization',
    description: 'A deep learning project that leverages Generative Adversarial Networks (GANs) to automatically colorize Synthetic Aperture Radar (SAR) images.',
    image: 'https://images.unsplash.com/photo-1578589302979-24448e95ef4e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['AI/ML'],
    technologies: ['Python', 'TensorFlow', 'GANs', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/TexZ-GenZ/SAR-image-colorization-using-Deep-Learning'
  },
  {
    title: 'Sentimatrix',
    description: 'Real-time email sentiment analysis application built for the IIT Bombay TechFest Datamatics Hackathon, combining RPA with a modern C# desktop application.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1260&h=750&q=80',
    categories: ['Desktop'],
    technologies: ['C#', 'Python', 'NLP', 'RPA'],
    githubUrl: 'https://github.com/TexZ-GenZ/Sentimatrix'
  },
  {
    title: 'LatexAI',
    description: 'AI-powered LaTeX solution generator for algorithms and data structures problems, featuring real-time streaming responses and professionally formatted academic solutions.',
    image: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?auto=format&fit=crop&w=1260&h=750&q=80',
    categories: ['Web'],
    technologies: ['TypeScript', 'Next.js', 'LaTeX', 'OpenAI API'],
    githubUrl: 'https://github.com/TexZ-GenZ/LatexAI',
    liveUrl: 'https://latex-ai.vercel.app'
  },
  {
    title: 'Flappy Pushups',
    description: 'A fun twist on the classic Flappy Bird game, controlled by your face movements! Uses computer vision to track your face position and control the bird\'s movement.',
    image: 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    categories: ['Computer Vision'],
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'Pygame'],
    githubUrl: 'https://github.com/TexZ-GenZ/flappy-pushups'
  }
];