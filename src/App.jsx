import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RootPage, HomePage, DetailsPage } from './pages/index';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'country/:cca3',
                element: <DetailsPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
