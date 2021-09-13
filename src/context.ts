import {HealthController} from 'express-ext';
import {ProxyController} from 'query-express';

export interface ApplicationContext {
  health: HealthController;
  proxy: ProxyController;
}
