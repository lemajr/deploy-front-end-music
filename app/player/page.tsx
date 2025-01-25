'use client';

import { Suspense } from 'react';
import Player from '@/components/Player';
export default function PlayerPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
      <Player />
    </Suspense>
  );
}
