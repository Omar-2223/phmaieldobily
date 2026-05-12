import React from 'react';
import type { Metadata } from 'next';
import DownloadPageClient from './components/DownloadPageClient';

export const metadata: Metadata = {
  title: 'Download — Ph - Mai Eldobily Pharmacy App',
  description:
    'Download the latest version of Ph - Mai Eldobily pharmacy app. Always get the newest version for the best experience.',
};

export default function DownloadPage() {
  return <DownloadPageClient />;
}