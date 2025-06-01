import type { AppStage } from "./types";

/**
 * @classdesc base address of external resources will gather here and will be accessed base on a defined APP_STAGE environment variable. you can add your server custom address here
 * if your addresses are not depend of app environment you could add static get method
 */
class AddressConfig{
    appStage:AppStage;
    constructor(appStage:AppStage){
        this.appStage = appStage;
    }
    get serviceUrl(){
        switch(this.appStage){
            case 'dev':
                return 'https://api.themoviedb.org';
            case 'test':
                return 'https://api.themoviedb.org';
            case 'staging':
                return 'https://api.themoviedb.org';
            case 'main':
                return 'https://api.themoviedb.org';
        }
        return 'NOT_VALID_ENV';
    }
    get websiteURL(){
        switch(this.appStage){
            case 'dev':
                return 'http://localhost:3001';
            case 'test':
                return 'http://localhost:3001';
            case 'staging':
                return 'http://localhost:3001';
            case 'main':
                return 'http://localhost:3001';
        }
        return 'NOT_VALID_ENV';
    }
    get TMBDImageBaseUrl(){
        return 'https://image.tmdb.org/t/p';
    }
}
export default AddressConfig;