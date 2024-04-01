import './App.css';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
import { store } from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <div className='justify-center h-full'>
          <div>
            <PostsList />
          </div>
          <div style={{ marginTop: '20px' }}>
            <PostForm />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
