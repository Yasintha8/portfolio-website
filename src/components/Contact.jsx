import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';
import { toast } from 'react-toastify';
function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "478424e0-eea0-429c-9e3f-fd5aa438469b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <section id="contact" className="min-h-screen mx-auto px-6 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading text-4xl md:text-5xl text-center">Contact <span className="text-accent">Me</span></h2>
        <p className="section-subheading text-center text-sm md:text-base">
          Lets discuss how we can work together
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card flex items-center space-x-4 bg-white/5 backdrop-blur-sm p-8 border border-accent/20 hover:border-accent/40">
              <FaEnvelope className="text-2xl text-accent" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-text">yasinthachamikara28@gmail.com</p>
              </div>
            </div>
            <div className="card flex items-center space-x-4 bg-white/5 backdrop-blur-sm p-8 border border-accent/20 hover:border-accent/40">
              <FaPhone className="text-2xl text-accent" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-text">+94 76 586 5283</p>
              </div>
            </div>
            <div className="card flex items-center space-x-4 bg-white/5 backdrop-blur-sm p-8 border border-accent/20 hover:border-accent/40">
              <FaMapMarkerAlt className="text-2xl text-accent" />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-text">Matara, Sri Lanka</p>
              </div>
            </div>
          </motion.div>

          <motion.form onSubmit={onSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email" 
                id="email"
                className="form-input"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="form-input"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary w-full hover:bg-accentDark transition-colors duration-300"
            >
              {result ? result : "Send Message"}
            </button>
          </motion.form>
        </div>
      </motion.div>
      
    </section>
  );
}

export default Contact;