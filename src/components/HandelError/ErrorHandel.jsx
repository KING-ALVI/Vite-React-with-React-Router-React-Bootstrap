import PropTypes from "prop-types";
import { Link, useRouteError } from "react-router-dom";

const ErrorHandel = () => {
    const Error = useRouteError();
    console.log(Error);

    return (
        <>
            <h1 className="display-1 text-center">SORRY PAGE NOT FOUND !!</h1>

            <p className="h3 text-center">
                <b><i>{Error.statusText || Error.message}</i></b>
            </p>

            {Error.status === 404 && (
                <p className="h3 text-center">
                    <b><i>{Error.error.message}</i></b>
                </p>
            )}

            <center><Link className="btn btn-primary" to="/">HOME PAGE</Link></center>
        </>
    );
};

ErrorHandel.propTypes = {
    customErrorMessage: PropTypes.string,
    statusCode: PropTypes.number,
};

export default ErrorHandel;