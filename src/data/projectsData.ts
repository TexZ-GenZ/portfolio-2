import { Project } from '../components/ProjectCard';

export const projects: Project[] = [
  {
    title: 'YouTube Clone',
    description: 'A scalable YouTube clone with Flutter frontend and FastAPI backend. Features secure authentication, video transcoding, and adaptive bitrate streaming.',
    image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Full Stack', 'Mobile'],
    technologies: ['Flutter', 'FastAPI', 'AWS', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/TexZ-GenZ/Youtube-Clone-'
  },
  {
    title: 'Spotify Clone',
    description: 'A full-stack Spotify-like music streaming application featuring user authentication, music upload, recent plays, liked songs, and an immersive music player.',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Full Stack', 'Mobile'],
    technologies: ['Dart', 'Flutter', 'Firebase', 'Cloud Functions'],
    githubUrl: 'https://github.com/TexZ-GenZ/Spotify-Clone'
  },
  {
    title: 'SAR Image Colorization',
    description: 'A deep learning project that leverages Generative Adversarial Networks (GANs) to automatically colorize Synthetic Aperture Radar (SAR) images.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Tensorflow', 'Research'],
    technologies: ['Python', 'TensorFlow', 'GANs', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/TexZ-GenZ/SAR-image-colorization-using-Deep-Learning'
  },
  {
    title: 'Sentimatrix',
    description: 'Real-time email sentiment analysis application built for the IIT Bombay TechFest Datamatics Hackathon, combining RPA with a modern web interface.',
    image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['RPA'],
    technologies: ['C#', 'Python', 'NLP', 'RPA'],
    githubUrl: 'https://github.com/TexZ-GenZ/Sentimatrix'
  },
  {
    title: 'LatexAI',
    description: 'AI-powered LaTeX solution generator for algorithms and data structures problems, featuring real-time streaming responses and professionally formatted academic solutions.',
    image: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Web'],
    technologies: ['TypeScript', 'Next.js', 'LaTeX', 'OpenAI API'],
    githubUrl: 'https://github.com/TexZ-GenZ/LatexAI',
    liveUrl: 'https://latex-ai.vercel.app'
  },
  {
    title: 'Flappy Pushups',
    description: 'A fun twist on the classic Flappy Bird game, controlled by your face movements! Uses computer vision to track your face position and control the bird\'s movement.',
    image: 'https://images.pexels.com/photos/4691567/pexels-photo-4691567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Computer Vision'],
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'Pygame'],
    githubUrl: 'https://github.com/TexZ-GenZ/flappy-pushups'
  }
];