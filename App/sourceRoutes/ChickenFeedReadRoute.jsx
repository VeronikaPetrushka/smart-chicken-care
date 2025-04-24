import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import ChickenFeedRead from '../sourceComponents/ChickenFeedRead';

const ChickenFeedReadRoute = ({ route }) => {
    const { item } = route.params;

    return (
        <ChickenRouteWrapper child={<ChickenFeedRead item={item} />} />
    )
};

export default ChickenFeedReadRoute;