import _ from 'lodash'
import {
    Route,
    Redirect
} from "react-router-dom";
import { useRecoilValue } from 'recoil'
import { getJokes } from '../store/selector'

function AuthRoute({ children, ...rest }) {
    const { jokes } = useRecoilValue(getJokes)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                _.size(jokes) !== 0 ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/sign-in",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default AuthRoute