import React from 'react';
import Layout from '@theme/Layout';
import Hero from './Hero';
import Playground from './Playground';
import DeveloperTools from './DeveloperTools';
import CommunityHub from './CommunityHub';
import ApiDocs from './ApiDocs';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <main>
        <Playground />
        <DeveloperTools />
        <CommunityHub />
        <ApiDocs />
      </main>
    </Layout>
  );
}