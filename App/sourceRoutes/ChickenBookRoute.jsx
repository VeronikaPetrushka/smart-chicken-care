import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import ChickenBook from '../sourceComponents/ChickenBook';

const ChickenBookRoute = () => {
    return (
        <ChickenRouteWrapper child={<ChickenBook />} menu={true} />
    )
};

export default ChickenBookRoute;