import './App.css';
import AuthProvider from './contexts/authContext';
import ContactProvider from './contexts/contactsContext';
import Routes from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <ContactProvider>
        <Routes/>
      </ContactProvider>
    </AuthProvider>
  )
}

export default App;
