import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { motion } from 'framer-motion';

// Loading component that respects theme
const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50 dark:bg-gray-900">
      <motion.div
        className="text-primary-800 dark:text-primary-200 text-3xl font-heading font-bold"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: [-10, 0, -10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary-800 dark:text-primary-200"
          >
            Welcome
          </motion.span>
          <motion.div className="flex gap-1">
            {['.', '.', '.'].map((dot, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="text-primary-600 dark:text-primary-400"
              >
                {dot}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// App content component
const AppContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-primary-50 dark:bg-gray-900 text-primary-800 dark:text-primary-100 transition-colors duration-300"
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;