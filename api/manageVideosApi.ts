/**
 * Stream API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@bunny.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CaptionModelAdd } from '../model/captionModelAdd';
import { CreateVideoModel } from '../model/createVideoModel';
import { FetchVideoRequest } from '../model/fetchVideoRequest';
import { UpdateVideoModel } from '../model/updateVideoModel';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://video.bunnycdn.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ManageVideosApiApiKeys {
    AccessKey,
}

export class ManageVideosApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'AccessKey': new ApiKeyAuth('header', 'AccessKey'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ManageVideosApiApiKeys, value: string) {
        (this.authentications as any)[ManageVideosApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Add Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     * @param captionModelAdd 
     */
    public async videoAddCaption (libraryId: number, videoId: string, srclang: string, captionModelAdd: CaptionModelAdd, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/library/{libraryId}/videos/{videoId}/captions/{srclang}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'srclang' + '}', encodeURIComponent(String(srclang)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new Error('Required parameter libraryId was null or undefined when calling videoAddCaption.');
        }

        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling videoAddCaption.');
        }

        // verify required parameter 'srclang' is not null or undefined
        if (srclang === null || srclang === undefined) {
            throw new Error('Required parameter srclang was null or undefined when calling videoAddCaption.');
        }

        // verify required parameter 'captionModelAdd' is not null or undefined
        if (captionModelAdd === null || captionModelAdd === undefined) {
            throw new Error('Required parameter captionModelAdd was null or undefined when calling videoAddCaption.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(captionModelAdd, "CaptionModelAdd")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AccessKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AccessKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Create Video
     * @param libraryId 
     * @param createVideoModel 
     */
    public async videoCreateVideo (libraryId: number, createVideoModel: CreateVideoModel, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/library/{libraryId}/videos'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new Error('Required parameter libraryId was null or undefined when calling videoCreateVideo.');
        }

        // verify required parameter 'createVideoModel' is not null or undefined
        if (createVideoModel === null || createVideoModel === undefined) {
            throw new Error('Required parameter createVideoModel was null or undefined when calling videoCreateVideo.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createVideoModel, "CreateVideoModel")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AccessKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AccessKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Delete Caption
     * @param libraryId 
     * @param videoId 
     * @param srclang 
     */
    public async videoDeleteCaption (libraryId: number, videoId: string, srclang: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/library/{libraryId}/videos/{videoId}/captions/{srclang}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'srclang' + '}', encodeURIComponent(String(srclang)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new Error('Required parameter libraryId was null or undefined when calling videoDeleteCaption.');
        }

        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling videoDeleteCaption.');
        }

        // verify required parameter 'srclang' is not null or undefined
        if (srclang === null || srclang === undefined) {
            throw new Error('Required parameter srclang was null or undefined when calling videoDeleteCaption.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AccessKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AccessKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Delete Video
     * @param libraryId 
     * @param videoId 
     */
    public async videoDeleteVideo (libraryId: number, videoId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/library/{libraryId}/videos/{videoId}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new Error('Required parameter libraryId was null or undefined when calling videoDeleteVideo.');
        }

        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling videoDeleteVideo.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AccessKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AccessKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Fetch Video
     * @param libraryId 
     * @param videoId 
     * @param fetchVideoRequest 
     */
    public async videoFetchVideo (libraryId: number, videoId: string, fetchVideoRequest: FetchVideoRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/library/{libraryId}/videos/{videoId}/fetch'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new Error('Required parameter libraryId was null or undefined when calling videoFetchVideo.');
        }

        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling videoFetchVideo.');
        }

        // verify required parameter 'fetchVideoRequest' is not null or undefined
        if (fetchVideoRequest === null || fetchVideoRequest === undefined) {
            throw new Error('Required parameter fetchVideoRequest was null or undefined when calling videoFetchVideo.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(fetchVideoRequest, "FetchVideoRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AccessKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AccessKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Get Video
     * @param libraryId 
     * @param videoId 
     */
    public async videoGetVideo (libraryId: number, videoId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/library/{libraryId}/videos/{videoId}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new Error('Required parameter libraryId was null or undefined when calling videoGetVideo.');
        }

        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling videoGetVideo.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AccessKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AccessKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary List Videos
     * @param libraryId 
     * @param page 
     * @param itemsPerPage 
     * @param search 
     * @param collection 
     * @param orderBy 
     */
    public async videoList (libraryId: number, page?: number, itemsPerPage?: number, search?: string, collection?: string, orderBy?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/library/{libraryId}/videos'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new Error('Required parameter libraryId was null or undefined when calling videoList.');
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }

        if (itemsPerPage !== undefined) {
            localVarQueryParameters['itemsPerPage'] = ObjectSerializer.serialize(itemsPerPage, "number");
        }

        if (search !== undefined) {
            localVarQueryParameters['search'] = ObjectSerializer.serialize(search, "string");
        }

        if (collection !== undefined) {
            localVarQueryParameters['collection'] = ObjectSerializer.serialize(collection, "string");
        }

        if (orderBy !== undefined) {
            localVarQueryParameters['orderBy'] = ObjectSerializer.serialize(orderBy, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AccessKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AccessKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Set Thumbnail
     * @param libraryId 
     * @param videoId 
     * @param thumbnailUrl 
     */
    public async videoSetThumbnail (libraryId: number, videoId: string, thumbnailUrl?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/library/{libraryId}/videos/{videoId}/thumbnail'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new Error('Required parameter libraryId was null or undefined when calling videoSetThumbnail.');
        }

        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling videoSetThumbnail.');
        }

        if (thumbnailUrl !== undefined) {
            localVarQueryParameters['thumbnailUrl'] = ObjectSerializer.serialize(thumbnailUrl, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AccessKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AccessKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Update Video
     * @param libraryId 
     * @param videoId 
     * @param updateVideoModel 
     */
    public async videoUpdateVideo (libraryId: number, videoId: string, updateVideoModel: UpdateVideoModel, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/library/{libraryId}/videos/{videoId}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new Error('Required parameter libraryId was null or undefined when calling videoUpdateVideo.');
        }

        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling videoUpdateVideo.');
        }

        // verify required parameter 'updateVideoModel' is not null or undefined
        if (updateVideoModel === null || updateVideoModel === undefined) {
            throw new Error('Required parameter updateVideoModel was null or undefined when calling videoUpdateVideo.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateVideoModel, "UpdateVideoModel")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AccessKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AccessKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Upload Video
     * @param libraryId 
     * @param videoId 
     * @param body Raw file that should be send as the PUT request body. No form encoding or Base64 encoding should be used.
     */
    public async videoUploadVideo (libraryId: number, videoId: string, body: RequestFile, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/library/{libraryId}/videos/{videoId}'
            .replace('{' + 'libraryId' + '}', encodeURIComponent(String(libraryId)))
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'libraryId' is not null or undefined
        if (libraryId === null || libraryId === undefined) {
            throw new Error('Required parameter libraryId was null or undefined when calling videoUploadVideo.');
        }

        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling videoUploadVideo.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling videoUploadVideo.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "RequestFile")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.AccessKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.AccessKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}