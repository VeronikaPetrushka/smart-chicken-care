import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import ChickenBrandRead from '../sourceComponents/ChickenBrandRead';

const ChickenBrandReadRoute = ({ route }) => {
    const { item } = route.params;

    return (
        <ChickenRouteWrapper child={<ChickenBrandRead item={item} />} />
    )
};

export default ChickenBrandReadRoute;