import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {registerDefaultVariables} from 'jb-core/theme';
import App from './App.tsx'
import { authManager } from '@utils/auth/auth.ts';

authManager.initAuth();

registerDefaultVariables();

createRoot(document.getElementById('root')!).render(
    <App />,
)
