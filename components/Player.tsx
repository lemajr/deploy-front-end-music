'use client';

import { useEffect, useState } from 'react';
import { fetchMusicByGenre } from '@/lib/actions/fetchMusic';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Loader from './loader';
import { TbPlayerPlay } from "react-icons/tb";
import Link from 'next/link';
import AnimatedShinyTextComponent from './HeadingShine';
import { motion } from 'framer-motion';

interface Track {
  id: string;
  album_image: string;
  name: string;
  artist_name: string;
  audio: string;
}

export default function Player() {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  const [tracks, setTracks] = useState<Track[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        if (genre) {
          setLoading(true);
          const results: Track[] = await fetchMusicByGenre(genre);
          setTracks(results);
        }
      } catch {
        setError('Failed to fetch music tracks.');
      } finally {
        setLoading(false);
      }
    };
    fetchTracks();
  }, [genre]);

  if (!genre) {
    return <p className="text-center mt-10">Please select a genre to get started.</p>;
  }

  const parentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const childVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
  
  return (
    <div className="bg-[url('/player-bg.jpg')] bg-cover bg-center">
      <div className="container mx-auto min-h-screen p-6">
        <Link href={"/"} className="text-2xl font-bold mb-4 flex gap-2 sticky top-0 z-10 drop-shadow-md"> <TbPlayerPlay className='bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-md p-2 w-8 h-8 text-white' />
          <AnimatedShinyTextComponent genre={genre} />
        </Link>
        {error && <p className="text-red-500">{error}</p>}
        {loading ? (
          <Loader />
        ) : (

          <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={parentVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, staggerChildren: 0.1 }} // Staggered by 0.1s
        >
          {tracks.map((track) => (
           <motion.div
           key={track.id}
           className="bg-white p-4 shadow-md rounded"
           variants={childVariants}
           transition={{ duration: 0.9, delayChildren: 0.1 }}
         >
              <Image
                src={track.album_image || '/default-cover.jpg'}
                alt={track.name || 'Unknown Track'}
                className="w-full h-40 object-cover mb-2 rounded"
                width={500}
                height={160}
              />
              <h2 className="font-bold">{track.name || 'Unknown Title'}</h2>
              <p className="text-sm text-gray-500">{track.artist_name || 'Unknown Artist'}</p>
              <audio
                controls
                src={track.audio || undefined}
                className="mt-2 w-full"
              />
            </motion.div>
          ))}
        </motion.div>
        )}
      </div>
    </div>
  );
}


