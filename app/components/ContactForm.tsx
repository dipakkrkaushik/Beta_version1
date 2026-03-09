"use client";

import { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { supabase } from "./supabaseClient"; // ✅ import client

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name,
          email,
          message,
        },
      ]);

      if (error) {
        console.error(error);
        setStatus("Failed to send message.");
      } else {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  if (!mounted) return null;

  return (
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

          <Button type="submit" variant="contained">
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
  );
}