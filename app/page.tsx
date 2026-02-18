"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import { motion } from "framer-motion";


import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <main className="overflow-hidden">
      <Hero />
      <Clients />
      <Services />
      <Testimonials />
      <Newsletter />

      {/* ================= TEST SECTION ================= */}
     {/* ================= ZEN TEST SECTION ================= */}
<section className="relative py-28 bg-black overflow-hidden">

  {/* Animated Gradient Background */}
  <motion.div
    animate={{
      background: [
        "radial-gradient(circle at 20% 30%, #7c3aed22, transparent 40%)",
        "radial-gradient(circle at 80% 70%, #3b82f622, transparent 40%)",
        "radial-gradient(circle at 40% 80%, #ec489922, transparent 40%)",
      ],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className="absolute inset-0 blur-3xl"
  />

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: "easeOut",
          staggerChildren: 0.2,
        },
      },
    }}
    className="relative max-w-xl mx-auto px-6"
  >
    {/* Heading */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "white",
          mb: 6,
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        ZEN Test Experience
      </Typography>
    </motion.div>

    {/* Floating Glass Card */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      <Card
        sx={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          borderRadius: 4,
          color: "white",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 0 40px rgba(124,58,237,0.3)",
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Next-Level UI ✨
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#9ca3af", mb: 4 }}
          >
            Modern glassmorphism with floating animation,
            gradient glow and smooth motion effects.
          </Typography>

          {/* Magnetic Button */}
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(124,58,237,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(90deg,#7c3aed,#3b82f6)",
                borderRadius: "999px",
                px: 4,
                py: 1.2,
                fontWeight: "bold",
                textTransform: "none",
                transition: "0.3s",
              }}
            >
              Explore Now
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  </motion.div>
</section>
{/* ================================================= */}

{/* ================================================= */}

      {/* ================================================= */}

      {/* ================= CONTACT FORM ================= */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-2xl mx-auto px-6">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#f97316", fontWeight: "bold", mb: 4 }}
          >
            Contact Us
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
              boxShadow: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />

            <TextField
              label="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />

            <TextField
              label="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              fullWidth
              multiline
              rows={4}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: "#3b82f6",
                "&:hover": { backgroundColor: "#2563eb" },
              }}
            >
              Send Message
            </Button>

            {status && (
              <Typography align="center" sx={{ mt: 1 }}>
                {status}
              </Typography>
            )}
          </Box>
        </div>
      </section>
      {/* ================================================= */}
    </main>
  );
}
