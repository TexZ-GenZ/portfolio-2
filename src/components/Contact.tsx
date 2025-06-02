import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Linkedin, 
  Instagram, 
  Github, 
  Twitter, 
  Mail,
  Code, 
  Coffee,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  
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

  const platforms = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/priyanshusamal/',
      color: 'hover:bg-[#0077B5]',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/TexZ-GenZ',
      color: 'hover:bg-[#333]',
      description: 'Check out my projects'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/_priyanshu_samal/',
      color: 'hover:bg-[#E4405F]',
      description: 'Follow my journey'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: 'https://x.com/PriyanshuorTexz',
      color: 'hover:bg-[#1DA1F2]',
      description: 'Stay updated'
    },
    {
      name: 'LeetCode',
      icon: <Code size={24} />,
      url: 'https://leetcode.com/u/Priyanshu_Samal_123/',
      color: 'hover:bg-[#FFA116]',
      description: 'View my solutions'
    },
    {
      name: 'CodeChef',
      icon: <Coffee size={24} />,
      url: 'https://www.codechef.com/users/t_e_x_z26',
      color: 'hover:bg-[#5B4638]',
      description: 'Competitive programming'
    }
  ];

  return (
    <section id="contact" className="bg-primary-50 dark:bg-gray-900 py-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="section-container"
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          Let's Connect
        </motion.h2>
        
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-12">
          <a 
            href="mailto:priyanshusamal21@gmail.com"
            className="inline-flex items-center gap-2 text-xl font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 transition-colors"
          >
            <Mail size={24} />
            priyanshusamal21@gmail.com
            <ExternalLink size={16} />
          </a>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {platforms.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group p-6 rounded-xl bg-white dark:bg-gray-800 ${platform.color} hover:text-white transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredPlatform(platform.name)}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <div className="flex flex-col items-center gap-3">
                {platform.icon}
                <span className="font-medium">{platform.name}</span>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredPlatform === platform.name ? 1 : 0,
                    y: hoveredPlatform === platform.name ? 0 : 10
                  }}
                  className="text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {platform.description}
                </motion.p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center text-primary-600 dark:text-primary-400"
        >
          <p className="text-lg">Open to opportunities and collaborations!</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;