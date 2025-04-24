import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import ChickenGame from '../sourceComponents/ChickenGame';

const ChickenGameRoute = () => {
    return (
        <ChickenRouteWrapper child={<ChickenGame />} menu={true} />
    )
};

export default ChickenGameRoute;