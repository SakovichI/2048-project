export type EntityMock<T> = {
  [P in keyof T]: T[P];
};
