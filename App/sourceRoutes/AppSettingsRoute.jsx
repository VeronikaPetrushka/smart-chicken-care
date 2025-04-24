import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import AppSettings from '../sourceComponents/AppSettings';

const AppSettingsRoute = () => {
    return (
        <ChickenRouteWrapper child={<AppSettings />} menu={true} />
    )
};

export default AppSettingsRoute;