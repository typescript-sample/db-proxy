import {HealthController} from 'express-ext';
import {Pool} from 'pg';
import {PoolManager, PostgreSQLChecker} from 'postgre';
import {createProxyController} from 'query-express';
import {ApplicationContext} from './context';

export function log(msg: any, ctx?: any): void {
  console.log(msg);
}
export function createContext(pool: Pool): ApplicationContext {
  const sqlChecker = new PostgreSQLChecker(pool);
  const health = new HealthController([sqlChecker]);
  const manager = new PoolManager(pool);
  const proxy = createProxyController(manager);
  const ctx: ApplicationContext = {health, proxy};
  return ctx;
}
