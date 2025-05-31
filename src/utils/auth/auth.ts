import {appConfig} from "@config/app-config";

export type UserInfo = unknown;
type OnTokenUpdateCallback = (token: string) => void;
type CallBackTypes = "tokenUpdate"
class Auth {
    get accessToken():string | null {
        return window.localStorage.getItem('ACCESS_TOKEN');
    }
    set accessToken(accessToken:string) {
        window.localStorage.setItem('ACCESS_TOKEN', accessToken);
    }
    #tokenUpdateCallbacks: OnTokenUpdateCallback[] = [];
    addEventListener(type: CallBackTypes, callback: OnTokenUpdateCallback) {
        switch (type) {
            case 'tokenUpdate':
                this.#tokenUpdateCallbacks.push(callback);
                break;
        }
    }
    callbacks = {
        onTokenUpdate: (token: string) => {
            this.#tokenUpdateCallbacks.forEach((fn) => {
                fn(token);
            })
        }
    }
    setUser(accessToken: string, ) {
        window.localStorage.setItem('ACCESS_TOKEN', accessToken);
        this.callbacks.onTokenUpdate(accessToken);
    }
    logout() {
        window.localStorage.removeItem('ACCESS_TOKEN');
    }
    logoutAndGo() {
        this.logout();
        this.goToLoginPage();
    }
    goToLoginPage() {
        const usp = new URLSearchParams();
        usp.set('referer', window.location.href);
        const appendex = `?${usp.toString()}`;
        window.location.replace(appConfig.address.websiteURL + '/user/login' + appendex);
    }
    initAuth() {
        let accessToken = window.localStorage.getItem('ACCESS_TOKEN');
        if (!accessToken) {
            //TODO: we are writing a test app here so we just grab token from env
            // In production, you should implement a proper authentication flow
            accessToken = import.meta.env.TMDB_TOKEN;
            if (!accessToken) {
                this.goToLoginPage();
                return;
            }else{
                this.setUser(import.meta.env.TMDB_TOKEN);
            }
        }
    }
}
export const authManager = new Auth()