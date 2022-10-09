import {useEffect} from "react";

export function useCurrentFormValidityState(
  state: boolean,
  stateSetter: (state: boolean) => void
) {
  useEffect(() => {
    stateSetter(state)
  }, [state])
}
