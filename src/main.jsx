import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import sdk from '@farcaster/frame-sdk'

// Initialize Farcaster Frame SDK
(async () => {
  try {
    const context = await sdk.context;
    console.log('Farcaster Frame Context:', context);
    sdk.actions.ready();
  } catch (error) {
    console.error('Failed to initialize Farcaster SDK:', error);
    // Call ready anyway to prevent splash screen persistence
    sdk.actions.ready();
  }
})();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
