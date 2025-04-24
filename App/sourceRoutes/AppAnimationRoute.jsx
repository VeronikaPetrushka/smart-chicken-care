import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import AppAnimation from '../sourceComponents/AppAnimation';

const AppAnimationRoute = () => {
    return (
        <ChickenRouteWrapper child={<AppAnimation />} />
    )
};

export default AppAnimationRoute;