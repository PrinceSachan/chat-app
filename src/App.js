import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />


    return ( 
        <ChatEngine 
            height="100vh"
            projectID="3890c2e6-4807-4925-b652-961f3f7baf88"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}
 
export default App;