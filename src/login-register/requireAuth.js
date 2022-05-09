
import {
    Navigate
} from "react-router-dom";

import useToken from './useToken'
export default function RequireAuth({ children, linkTo }) {
    const { token, setToken } = useToken();
    return token === null
        ? <Navigate replace to="/login/no" />
        : children
    // : <Navigate replace to={`/${linkTo === undefined ? "home" : linkTo}`} />;
}