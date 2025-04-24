import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import AppPreview from '../sourceComponents/AppPreview';

const AppPreviewRoute = () => {
    return (
        <ChickenRouteWrapper child={<AppPreview />} />
    )
};

export default AppPreviewRoute;