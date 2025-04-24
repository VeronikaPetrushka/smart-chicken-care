import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import ChickenBrands from '../sourceComponents/ChickenBrands';

const ChickenBrandsRoute = () => {
    return (
        <ChickenRouteWrapper child={<ChickenBrands />} menu={true} />
    )
};

export default ChickenBrandsRoute;