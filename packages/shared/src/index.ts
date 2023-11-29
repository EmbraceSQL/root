export type EmbraceSQLClientRequest<P, V = never> = {
  operation: string;
  parameters: P;
  values: V;
};

export type EmbraceSQLClientResponse<R> = {
  operation: string;
  results: R;
};
