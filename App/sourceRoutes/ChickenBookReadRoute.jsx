import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import ChickenBookRead from '../sourceComponents/ChickenBookRead';

const ChickenBookReadRoute = ({ route }) => {
    const { item } = route.params;

    return (
        <ChickenRouteWrapper child={<ChickenBookRead item={item} />} />
    )
};

export default ChickenBookReadRoute;