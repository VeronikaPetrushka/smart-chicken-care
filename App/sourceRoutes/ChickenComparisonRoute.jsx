import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import ChickenComparison from '../sourceComponents/ChickenComparison';

const ChickenComparisonRoute = ({ route }) => {
    const { items } = route.params;

    return (
        <ChickenRouteWrapper child={<ChickenComparison items={items} />} />
    )
};

export default ChickenComparisonRoute;