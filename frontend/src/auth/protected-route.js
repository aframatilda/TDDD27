import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/loading.js";

/* Protectes the routes so they can be used by only authenticated users */
class ProtectedRoute extends React.Component {
  render() {
    return (
      <Route
        component={withAuthenticationRequired(this.props.component, {
          onRedirecting: () => <Loading />,
        })}
        {...this.props.args}
      />
    );
  }
}

export default ProtectedRoute;
