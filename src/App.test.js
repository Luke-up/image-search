import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

test('renders the gallery heading', () => {
  // App uses Redux hooks, so tests render it with the Provider wrapper.
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const headingElement = screen.getByRole('heading', { name: /image gallery/i });
  expect(headingElement).toBeInTheDocument();
});
