import { motion } from 'framer-motion';
function Experience() {
    return (
        <section id="experience" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-1 w-1 bg-accent/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
            <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            My <span className="text-accent">Experience</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-gray-300 max-w-3xl mx-auto text-lg"
                    >
                        My professional journey and internship experience
                    </motion.p>
                </motion.div>

                {/* Timeline */}
                <div className="relative mt-12 border-l border-gray-700 text-left">

                    {/* Experience Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="pl-6 mb-10 relative"
                    >
                        <div className="absolute w-4 h-4 bg-accent rounded-full -left-2.5 mt-1.5"></div>

                        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:border-accent transition">

                            <h3 className="text-xl font-semibold text-white">
                                Software Engineering Intern
                            </h3>

                            <p className="text-accent font-medium">
                                SoftedgeLab
                            </p>

                            <p className="text-gray-400 text-sm mt-1">
                                September 2025 – March 2026 · 6 Months
                            </p>

                            <ul className="mt-4 text-gray-300 space-y-2 text-md">
                                <li>• Developed responsive web interfaces using React</li>
                                <li>• Built REST APIs with Node.js and Express</li>
                                <li>• Worked with MongoDB database</li>
                                <li>• Collaborated with developers using Git & GitHub</li>
                            </ul>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Experience;

