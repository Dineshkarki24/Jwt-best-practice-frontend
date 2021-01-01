export type inMemoryType = string | null;

const inMemoryJWTManager:any = () => {
    let inMemoryJWT:inMemoryType = null;
    
    const getToken = () => inMemoryJWT;

    const setToken = (token:string) => {
        inMemoryJWT = token;
        return true;
    }

    const eraseToken = () => {
        inMemoryJWT = null 
        return true
    }

    return {
        eraseToken,
        getToken,
        setToken,
    }
}