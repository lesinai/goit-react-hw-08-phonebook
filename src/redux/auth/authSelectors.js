export const authSelector = state => state.auth?.user?.email;
export const selectorToken = state => state.auth.token;
export const selectorIsLogin = state => state.auth.isLoggedIn;
export const selectorIsRefreshing = state => state.auth.isRefreshing;
