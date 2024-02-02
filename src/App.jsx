import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routerApp from './Router';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    {routerApp.map((element) => (
                        <Route
                            key={element.path}
                            path={element.path}
                            element={
                                <element.layout>
                                    <element.component />
                                </element.layout>
                            }
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
