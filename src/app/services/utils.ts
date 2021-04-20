import { environment } from '../../environments/environment';

export function buildRoute(endpoint: string): string {
  return environment.backendUrl + endpoint;
}
