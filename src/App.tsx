import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc as Discord, Instagram, Youtube, Twitter, MousePointer2, Globe, Users, Gamepad2 } from 'lucide-react';

function App() {
  const [showServerInfo, setShowServerInfo] = useState(false);
  const [showTwitterPopup, setShowTwitterPopup] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Global Community",
      description: "Join players from around the world in epic adventures"
    },
    {
      icon: Users,
      title: "Active Players",
      description: "Vibrant community with regular events and activities"
    },
    {
      icon: Gamepad2,
      title: "Custom Features",
      description: "Unique gameplay mechanics and special events"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-green-500/20 rounded-full"
          animate={{
            y: [-20, window.innerHeight + 20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Cursor Trail Effect */}
      <motion.div
        className="pointer-events-none fixed w-6 h-6 rounded-full bg-green-500/20 blur-xl"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 10 }}
      />

      {/* Social Sidebar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
        {[
          { icon: Discord, href: "https://discord.gg/5n5zjYPz54", label: "Join our Discord" },
          { icon: Instagram, href: "https://www.instagram.com/legacy_verse_/", label: "Follow on Instagram" },
          { icon: Youtube, href: "https://www.youtube.com/@serverlegacy", label: "Subscribe on YouTube" },
          { icon: Twitter, href: "https://x.com/legacyversenet", label: "Follow on Twitter",  },
        ].map((social, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.a
              href={social.href}
              onClick={social.onClick}
              target={social.href !== "#" ? "_blank" : undefined}
              rel={social.href !== "#" ? "noopener noreferrer" : undefined}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center
                       hover:bg-white/20 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
            >
              <social.icon className="w-5 h-5 text-white" />
            </motion.a>
            <div className="absolute left-full ml-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-md
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          pointer-events-none whitespace-nowrap">
              {social.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent 
                     bg-gradient-to-r from-green-400 via-green-200 to-green-500
                     animate-pulse relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Legacy Verse
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the ultimate Minecraft adventure in SMP, PVP & Events
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.button
              onClick={() => setShowServerInfo(true)}
              className="px-8 py-3 rounded-full bg-green-500/20 backdrop-blur-md
                       border border-green-500/30 hover:bg-green-500/30
                       transition-all duration-300 flex items-center gap-2
                       shadow-lg shadow-green-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MousePointer2 className="w-5 h-5" />
              Connect Now
            </motion.button>
            
            <motion.a
              href="https://discord.gg/5n5zjYPz54"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md
                       border border-white/20 hover:bg-white/20
                       transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Discord className="w-5 h-5" />
              Discord
            </motion.a>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10
                         hover:bg-white/10 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setActiveFeature(index)}
                onHoverEnd={() => setActiveFeature(null)}
              >
                <feature.icon className="w-8 h-8 mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Server Info Modal */}
        <AnimatePresence>
          {showServerInfo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
            >
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setShowServerInfo(false)}
              />
              <motion.div
                className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl
                         border border-white/20 max-w-md w-full"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">Server Information</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <p className="font-mono">📁 IP: legacy.hectorhosting.xyz</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <p className="font-mono">📁 BEDROCK: hectorhosting.mcpe.nl</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <p className="font-mono">🔐 PORT: 25586</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-6 text-center">
                  To play, you need to be whitelisted
                </p>
                <motion.a
                  href="https://discord.gg/5n5zjYPz54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full px-6 py-3 rounded-full bg-discord hover:bg-discord/80
                           transition-all duration-300 flex items-center justify-center gap-2
                           shadow-lg shadow-discord/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Discord className="w-5 h-5" />
                  Join Discord for Whitelisting
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Twitter Coming Soon Popup */}
        <AnimatePresence>
          {showTwitterPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
            >
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setShowTwitterPopup(false)}
              />
              <motion.div
                className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl
                         border border-white/20 max-w-md w-full text-center"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <Twitter className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Coming Soon!</h3>
                <p className="text-gray-300 mb-6">
                  Our Twitter account is currently under development. Stay tuned for updates!
                </p>
                <motion.button
                  onClick={() => setShowTwitterPopup(false)}
                  className="px-6 py-2 rounded-full bg-blue-500/20 backdrop-blur-md
                           border border-blue-500/30 hover:bg-blue-500/30
                           transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Got it!
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;