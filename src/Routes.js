import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { Main } from './pages/Main.js';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Route path='main' element={<Main />}/>
                </Route>
            </Switch>
        </Router>
    );
}