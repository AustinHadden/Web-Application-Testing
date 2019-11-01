import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// unit test react components
test('renders without crashing', () => {  
  render(<App />);
});
