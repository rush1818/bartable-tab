import { applyMiddleware } from 'redux';
import StationMiddlware from './station_middleware.js';

const RootMiddleware = applyMiddleware(
    StationMiddlware
);

export default RootMiddleware;
