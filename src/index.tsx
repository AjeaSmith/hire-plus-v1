import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'tw-elements';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
