import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import ChickenExpenses from '../sourceComponents/ChickenExpenses';

const ChickenExpensesRoute = () => {
    return (
        <ChickenRouteWrapper child={<ChickenExpenses />} />
    )
};

export default ChickenExpensesRoute;