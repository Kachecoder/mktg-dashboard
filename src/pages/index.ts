/**
 * This file redirects to the App Router implementation
 */

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LegacyRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/dashboard');
  }, [router]);
  
  return null;
}
