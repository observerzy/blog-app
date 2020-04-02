declare interface Context<T, P, O> {
    state: T;
    dispatch: P;
    options: O;
}
