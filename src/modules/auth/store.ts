export interface AuthStore {
    user: {
        username?: string;
        id?: string;
    },
    auth: {
        jwt?: string;
    }
}

export const AUTH_STORE = 'auth';

export const store = {
    namespaced: true,
    state: {
        user: {
            username: undefined,
            id: undefined,
        },
        auth: {
            jwt: undefined
        }
    } as AuthStore,
    mutations: {

    },
    actions: {

    }
}