// declare声明可以全局使用？待研究
declare interface Context<T, P> {
  state: T;
  dispatch: P;
}
