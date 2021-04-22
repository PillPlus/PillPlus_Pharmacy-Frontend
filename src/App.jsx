import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { LoginPage, HomePage, ProfilePage } from './pages';

const App = () => {
    const user = useSelector((state) => state.user);

    return (
        <BrowserRouter>
            {user && (
                <Switch>
                    <Route exact path="/home" component={HomePage} />

                    <Route exact path="/profile" component={ProfilePage} />

                    <Redirect to="/home" />
                </Switch>
            )}
            {!user && (
                <Switch>
                    <Route exact path="/login" component={LoginPage} />
                    <Route
                        exact
                        path="/forgot-password"
                        component={() => {
                            return <div className="flex justify-center items-center w-full h-screen text-2xl">หน้าลืมรหัสผ่าน</div>;
                        }}
                    />
                    <Redirect to="/login" />
                </Switch>
            )}
        </BrowserRouter>
    );
};

export default App;