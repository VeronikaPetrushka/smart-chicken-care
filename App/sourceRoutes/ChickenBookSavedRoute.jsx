import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import ChickenBookSaved from '../sourceComponents/ChickenBookSaved';

const ChickenBookSavedRoute = () => {
    return (
        <ChickenRouteWrapper child={<ChickenBookSaved />} />
    )
};

export default ChickenBookSavedRoute;