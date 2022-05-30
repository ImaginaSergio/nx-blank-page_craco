import React, { FC, useEffect } from 'react';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
} from '@chakra-ui/react';

import * as serviceWorker from '../serviceWorkerRegistration';

const ServiceWorkerController: FC = () => {
  const [showReload, setShowReload] = React.useState(false);
  const [waitingWorker, setWaitingWorker] =
    React.useState<ServiceWorker | null>(null);

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    console.log('---- Actualizando SW ----');

    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    console.log('---- Actualizando página ----');

    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
    setShowReload(false);

    window.location.reload();
  };

  return showReload ? (
    <Alert status="info">
      <AlertIcon />

      <Box>
        <AlertTitle>A new version is available!</AlertTitle>

        <AlertDescription>
          <Box>Click on the button to reload the page</Box>
          <Button color="inherit" size="small" onClick={reloadPage}>
            Reload
          </Button>
        </AlertDescription>
      </Box>
    </Alert>
  ) : (
    <></>
  );
};

export default ServiceWorkerController;
