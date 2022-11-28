export interface AuthSignupLoginResponse {
    idToken: string,
    email: string,
    name: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}
