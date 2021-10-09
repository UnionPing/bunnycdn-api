export * from './manageCollectionsApi';
import { ManageCollectionsApi } from './manageCollectionsApi';
export * from './manageVideosApi';
import { ManageVideosApi } from './manageVideosApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ManageCollectionsApi, ManageVideosApi];
