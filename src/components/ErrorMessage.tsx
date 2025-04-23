import React from 'react';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg text-center mt-6">
    <p className="font-semibold mb-1">Error</p>
    <p>{error}</p>
  </div>
);

export default ErrorMessage;
