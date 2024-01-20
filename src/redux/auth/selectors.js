export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectError = state => state.auth.error;
export const selectIsLoading = state => state.auth.isLoading;
// export const selectToken = state => state.auth.refToken;
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;