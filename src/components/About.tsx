import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="bg-white dark:bg-gray-800 py-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="section-container"
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          About Me
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div variants={itemVariants}>
            <div className="space-y-6 text-primary-700 dark:text-primary-200">
              <p className="text-lg leading-relaxed">
                I am a Full Stack Developer from India with a passion for building scalable systems and
                cloud-native applications. Currently specializing in modern backend technologies, cloud architecture,
                and system design.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-300 mb-4">
                    Current Focus
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      Building with&nbsp;<strong>Flutter</strong>&nbsp;and&nbsp;<strong>FastAPI</strong>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <strong>System architecture &nbsp;</strong> and &nbsp;<strong>AWS</strong>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-300 mb-4">
                    Learning
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <strong>Apache Kafka</strong>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <strong>Kubernetes</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;