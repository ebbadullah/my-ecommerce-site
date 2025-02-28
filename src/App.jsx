import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Router from './router/Router';
import { ThemeProvider, useTheme } from './ProductContext/ThemeContext';
import { useEffect } from 'react';

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Set the theme dynamically
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
