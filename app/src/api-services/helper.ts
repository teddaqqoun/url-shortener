const apiUrl: string = import.meta.env.VITE_API_URL;

export class ApiServiceHelper {
  public static getApiPath(path: string): string {
    return `${apiUrl}${path}`;
  }
}
