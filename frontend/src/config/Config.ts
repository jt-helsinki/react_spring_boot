import { EnvConfig } from './EnvConfig';

/**
 * Sets application configuration properites for each environment. i.e. one for development and one for production.
 *
 * Add properties as needed.
 */

export class Config {

    private static readonly BASE_API_URL: string = "http://localhost:8080";

    public static configuration(): EnvConfig {
        return Config.environmentConfiguration(process.env.REACT_APP_BACKEND_ENV || 'development');
    }

    private static environmentConfiguration(environment: string): EnvConfig {
        const configs: Configs = {
            dev: {
                baseAPIUrl: Config.BASE_API_URL,
                errorLogging: true,
                logging: false
            },
            development: {
                baseAPIUrl: Config.BASE_API_URL,
                errorLogging: true,
                logging: true
            },
            prod: {
                baseAPIUrl: Config.BASE_API_URL,
                errorLogging: false,
                logging: false
            }
        };

        const config = configs[environment];
        if (!config) {
            throw new Error(`Unknown environment '${environment}'`);
        }
        return config;
    };
}


interface Configs {
    [envName: string]: EnvConfig;
}



