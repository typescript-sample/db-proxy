import {Application} from 'express';
import {ApplicationContext} from './context';

export function route(app: Application, ctx: ApplicationContext): void {
  app.get('/health', ctx.health.check);
  app.post('/query', ctx.proxy.query);
  app.post('/exec', ctx.proxy.exec);
  app.post('/exec-batch', ctx.proxy.execBatch);
}
