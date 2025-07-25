import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Preloader from '@/components/Preloader';
import SimplePreloader from '@/components/SimplePreloader';

const PreloaderDemo = () => {
  const [showPreloader, setShowPreloader] = useState(false);
  const [showSimplePreloader, setShowSimplePreloader] = useState(false);

  const handleShowPreloader = () => {
    setShowPreloader(true);
    setTimeout(() => {
      setShowPreloader(false);
    }, 4000);
  };

  const handleShowSimplePreloader = () => {
    setShowSimplePreloader(true);
    setTimeout(() => {
      setShowSimplePreloader(false);
    }, 3000);
  };

  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Preloader Demo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={handleShowPreloader} className="mr-4">
            Show Full Preloader
          </Button>
          <Button onClick={handleShowSimplePreloader} className="border border-gray-300">
            Show Simple Preloader
          </Button>
        </CardContent>
      </Card>

      {showPreloader && <Preloader />}
      {showSimplePreloader && <SimplePreloader />}
    </div>
  );
};

export default PreloaderDemo;
