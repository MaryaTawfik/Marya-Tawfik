/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ProgressBar } from "./components/ProgressBar";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Community } from "./components/Community";
import { Projects } from "./components/Projects";
import { Competitive } from "./components/Competitive";
import { Closing } from "./components/Closing";
// import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col font-sans transition-colors duration-300">
      {/* 1. Scroll progress bar */}
      <ProgressBar />

      {/* 2. Floating Nav Pill with Mood Switcher */}
      <Nav />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. About (Full-width band) */}
        <About />

        {/* 5. Skills and tools */}
        <Skills />

        {/* 6. Projects (Carousel with Request Traces) */}
        <Projects />

        {/* 7. Competitive Programming (Full-width band) */}
        {/* <Competitive /> */}

        {/* 8. Experience Timeline */}
        {/* <Experience /> */}
        <Community />
        <Contact />
        <Closing />
        {/* 9. Contact (Interactive Chat + Direct Inquiries) */}
        {/* <Contact /> */}
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
