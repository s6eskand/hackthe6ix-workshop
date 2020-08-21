import React, {useEffect, useState} from 'react';

// routing
import {Route, Switch} from 'react-router-dom';

// custom components
import Navigation from "../components/navigation/Navigation";
import Landing from "./Landing";
import Dashboard from "../components/dashboard/Dashboard";

// redux
import withShipment from "../withShipment";
import {
    isAuthenticatedSelector,
    userInfoSelector,
    loadingSelector,
    errorSelector,
    messageSelector,
} from "../redux/selectors/auth";
import {
    authLogout,
    authLogin,
    authRegister
} from "../redux/actions/auth";

function Base(props) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(props.loading)
    }, [props.loading]);

    return(
        <div>
            <Navigation
                authLogout={props.authLogout}
                authLogin={props.authLogin}
                authRegister={props.authRegister}
                isAuthenticated={props.isAuthenticated}
                loading={loading}
                error={props.error}
                message={props.message}
            />
            <Switch>
                <Route path="/" component={props.isAuthenticated ? Dashboard : Landing} />
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticatedSelector(state),
    userInfo: userInfoSelector(state),
    loading: loadingSelector(state),
    error: errorSelector(state),
    message: messageSelector(state),
});

const actionCreators = {
    authRegister,
    authLogin,
    authLogout
};

export default withShipment({
    mapStateToProps,
    actionCreators
}, Base);