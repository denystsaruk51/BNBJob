import { combineReducers } from 'redux';
import CalculatorReducer from './calculatorReducer';
import routes from './routes';

export default combineReducers({
  routes,
  calculator: CalculatorReducer,
});