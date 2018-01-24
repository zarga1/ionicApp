import { Injectable }           from '@angular/core';
import { Observable }           from 'rxjs/Observable';

@Injectable()
export class HttpResponseHandler {
	constructor(
  ) {}

  /**
   * Global http error handler.
   *
   * @param error
   * @param source
   * @returns {ErrorObservable}
   */
  public onCatch(response: any, source: Observable<any>): Observable<any> {
    switch (response.status) {
      case 400:
        this.handleBadRequest(response);
        break;

      case 401:
        this.handleUnauthorized(response);
        break;

      case 403:
        this.handleForbidden();
        break;

      case 404:
        this.handleNotFound(response);
        break;

      case 500:
        this.handleServerError();
        break;

      default:
        break;
    }

    return Observable.throw(response);
  }

  /**
   * Shows notification errors when server response status is 401
   *
   * @param error
   */
  private handleBadRequest(responseBody: any): void {
    if (responseBody._body) {
      try {
        var bodyParsed = responseBody.json();
        this.handleErrorMessages(bodyParsed);
      } catch (error) {
        this.handleServerError();
      }
    }
    else this.handleServerError();
  }

  /**
   * Shows notification errors when server response status is 401 and redirects user to login page
   *
   * @param responseBody
   */
  private handleUnauthorized(responseBody: any): void {

  }

  /**
   * Shows notification errors when server response status is 403
   */
  private handleForbidden(): void {

  }

  /**
   * Shows notification errors when server response status is 404
   *
   * @param responseBody
   */
  private handleNotFound(responseBody: any): void {

  }

  /**
   * Shows notification errors when server response status is 500
   */
  private handleServerError(): void {

  }

  /**
   * Parses server response and shows notification errors with translated messages
   *
   * @param response
   */
  private handleErrorMessages(response: any): void {

  }

  private showNotificationError(title: string, message: string): void {
  }
}