import './App.css';
import AuthProvider from './contexts/authContext';
import UserProvider from './contexts/userContext';
import ContactProvider from './contexts/contactsContext';
import Routes from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ContactProvider>
          <Routes/>
        </ContactProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default App;
