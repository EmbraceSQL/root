import { EmbraceSQLClient } from "@embracesql/client";
import React, { createContext, useContext } from "react";

const EmbraceSQLContext = createContext<EmbraceSQLClient | null>(null);

type EmbraceSQLProviderProps = {
  client: EmbraceSQLClient;
  children?: React.ReactNode;
};

/**
 * Provide EmbraceSQL to all contained childen and hooks.
 */
export const EmbraceSQLProvider = ({
  client,
  children,
}: EmbraceSQLProviderProps) => {
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
