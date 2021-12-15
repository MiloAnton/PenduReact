import './App.css';
import Content from './components/content/content';
import ThemeContextProvider from './context/ThemeContext';
import BtnToggle from './components/BtnToggle/BtnToggle';

function App() {
  return (
    <div>
          <ThemeContextProvider>
            <BtnToggle />
            <Content />
          </ThemeContextProvider>
    </div>
  );
}
export default App;