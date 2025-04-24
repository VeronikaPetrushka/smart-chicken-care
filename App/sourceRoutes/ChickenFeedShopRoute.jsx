import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import ChickenFeedShop from '../sourceComponents/ChickenFeedShop';

const ChickenFeedShopRoute = () => {
    return (
        <ChickenRouteWrapper child={<ChickenFeedShop />} />
    )
};

export default ChickenFeedShopRoute;