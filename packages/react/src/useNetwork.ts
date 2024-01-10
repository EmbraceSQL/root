import React from "react";

type State = {
  loading: boolean;
  error?: Error;
};

/**
 * Hook the network, with loading and error semantics.
 */
export function useNetwork(
  networkAccess: () => Promise<void>,
  deps: React.DependencyList,
) {
  const [state, setState] = React.useState<State>({ loading: false });
  React.useEffect(() => {
    if (!state.loading) {
      setState({ loading: true });
    }
    networkAccess().then(
      () => setState({ loading: false }),
      (error) => setState({ loading: false, error }),
    );
  }, deps);

  return state;
}
