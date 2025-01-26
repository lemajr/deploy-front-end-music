'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { predictGenre } from '@/lib/actions/predictGenre';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { motion } from "framer-motion";
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { Vortex } from '@/components/ui/vortex';
import { WordRotate } from '@/components/ui/word-rotate';
import Header from '@/components/header';

export default function Home() {
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!age || age <= 0 || !gender) {
      setError('Please provide a valid age and select your gender.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const genre = await predictGenre(age as number, gender);
      // console.log(genre);
      router.push(`/player?genre=${genre}`);
    } catch (err) {
      console.error(err);
      setError('Failed to predict genre. Try again later.');
    } finally {
      setLoading(false);
    }
  }

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check for screen width on component mount
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Define threshold for small screen
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Re-check on window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative h-screen">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="video.mp4" type="video/mp4" />
      </video>

      <div className="absolute flex gap-48 max-md:flex-col items-center justify-center h-full w-full bg-gradient-to-r from-black to-transparent p-6 shadow-md rounded-lg">
      <div className='max-md:hidden'>
          <Header />

          </div>

          <motion.div
      className="rounded-[22px] max-w-sm p-1 sm:p-2 bg-zinc-900 overflow-hidden"
      initial={{ y: isSmallScreen ? 300 : 100, opacity: 0 }} // Start position based on screen size
      animate={{ y: 0, opacity: 1 }} // Animate to center
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }} // Smooth animation
    >
      <BackgroundGradient>
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <form onSubmit={onSubmit} className="p-6 shadow-md rounded-lg w-80">
            <h1 className="text-xl font-bold text-center text-white">
              Let AI Understand You
              <WordRotate
                className="text-xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold dark:text-white underline underline-offset-[0.5em]"
                words={["More", "Better", "Faster", "Smarter"]}
              />
            </h1>
            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-medium text-white">
                Age:
              </label>
              <Input
                type="number"
                id="age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value ? parseInt(e.target.value) : "")}
                className="mt-1 block w-full text-white p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-white text-sm font-medium">
                Gender:
              </label>

              <Select onValueChange={(value) => setGender(value)}>
                <SelectTrigger className="w-[100%] text-white">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <InteractiveHoverButton type="submit" disabled={loading}>
              {loading ? "Just relax ..." : "Let's go..."}
            </InteractiveHoverButton>
          </form>
        </Vortex>
      </BackgroundGradient>
    </motion.div>


        
      </div>
    </div>

  );
}
