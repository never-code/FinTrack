import React from 'react';

import { ErrorBoundary as ErrorWrapper } from 'react-error-boundary';

const ErrorBoundary = ({ children, name }) => {
  const logError = (error, componentStack) => {
    console.log('===========================ERROR================================');
    console.error(error);
    console.log('============================ERROR===============================');
  };

  const ErrorFallback = ({
    error, componentStack, resetErrorBoundary,
  }) => (
    <div role="alert">
      <p>{`Something went wrong in :${name}`}</p>
      <pre>{error.message}</pre>
      <pre>{componentStack}</pre>
      <button type="button" onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
  return (
    <ErrorWrapper
      FallbackComponent={ErrorFallback}
      onError={logError}
    >
      {children}
    </ErrorWrapper>
  );
};

export default ErrorBoundary;
