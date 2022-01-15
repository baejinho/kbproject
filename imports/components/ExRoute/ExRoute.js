import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { Roles } from "meteor/alanning:roles";
import _ from "lodash";
// Four modes
// 1. Public only mode - isPublicOnly(redirect path is needed)
// 2. Private mode - isPrivate(redirect path is needed)
// 3. Role mode - rolesOnly(redirect path is needed)
// 4. Not stricted

const ExRoute = ({
  isPublicOnly,
  isPrivate,
  rolesOnly,
  redirectPath,
  loggingIn,
  user,
  component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
       
      //if (loggingIn) {
      //  return <div />;
      //}
      if (
        (isPublicOnly && !user) ||
        (isPrivate && user && !_.isEmpty(user.roles)) ||
        (!_.isEmpty(rolesOnly) &&
          user &&
          user._id &&
          user.roles.indexOf(rolesOnly)>-1) ||
        (!isPublicOnly && !isPrivate && !rolesOnly)
      ) { 
        return React.createElement(component, {
          ...props,
          ...rest,
          loggingIn,
          user
        });
      }
 
      return (
        <Redirect
          to={{
            pathname: `${redirectPath || "/"}`,
            state: { prevUrl: rest.location.pathname }
          }}
        />
      );
    }}
  />
);

ExRoute.propTypes = {
  loggingIn: PropTypes.bool,
  component: PropTypes.func.isRequired,
  isPublicOnly: PropTypes.bool,
  isPrivate: PropTypes.bool
};

export default ExRoute;
