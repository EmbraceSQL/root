import { EmbraceSQLClient } from "@embracesql/client";
import React, { createContext, useContext } from "react";

const EmbraceSQLContext = createContext<EmbraceSQLClient | undefined>(
  undefined,
);

type EmbraceSQLProviderProps = {
  client: EmbraceSQLClient;
};

/**
 * Provide EmbraceSQL to all contained childen and hooks.
 */
export const EmbraceSQLProvider = ({
  client,
  children,
}: React.PropsWithChildren<EmbraceSQLProviderProps>) => {
  return (
    <EmbraceSQLContext.Provider value={client}>
      {children}
    </EmbraceSQLContext.Provider>
  );
};

/**
 * Hook your way to the raw EmbraceSQLClient.
 */
export function useEmbraceSQLClient<T extends EmbraceSQLClient>() {
  return useContext(EmbraceSQLContext) as T;
}
