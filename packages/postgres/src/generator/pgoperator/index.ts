const operatorOverrides = new Map<string, string>();

/**
 * Specific overrides to oeprator types.
 */
export function registerOperatorOverride(
  postgres_name: string,
  sql_operator: string,
) {
  operatorOverrides.set(postgres_name, sql_operator);
}

/**
 * Look up the operator to use in SQL syntax.
 */
export function operatorFor(postgres_name: string) {
  return operatorOverrides.get(postgres_name) ?? "=";
}

registerOperatorOverride("gin_trgm_ops", "%");
registerOperatorOverride("gist_trgm_ops", "%");
