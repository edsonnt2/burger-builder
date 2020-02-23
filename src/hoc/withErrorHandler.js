import React, { useState, useEffect } from "react";
import Modal from "../components/UI/Modal";
// import Axios from "axios";

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, setError] = useState(null);

    useEffect(() => {
      const interReq = axios.interceptors.request.use(req => {
        setError(null);
        return req;
      });
      const interRes = axios.interceptors.response.use(null, error => {
        setError(error);
      });
      return () => {
        console.log("useEffect Unmount", interReq, interRes);
        axios.interceptors.request.eject(interReq);
        axios.interceptors.response.eject(interRes);
      };
    }, []);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <>
        <Modal show={error} clicked={errorConfirmedHandler}>
          {error && error.message}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
