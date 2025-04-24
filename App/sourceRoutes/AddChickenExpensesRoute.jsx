import ChickenRouteWrapper from "../sourceHelpers/ChickenRouteWrapper"
import AddChickenExpenses from '../sourceComponents/AddChickenExpenses';

const AddChickenExpensesRoute = () => {
    return (
        <ChickenRouteWrapper child={<AddChickenExpenses />} menu={true} />
    )
};

export default AddChickenExpensesRoute;