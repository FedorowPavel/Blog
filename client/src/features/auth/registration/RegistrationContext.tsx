import {createContext} from "react";

export type RegistrationType = {
  isCurrentStepValid: boolean;
  setIsCurrentStepValid: (state: boolean) => void;
}

export const RegistrationContext = createContext<RegistrationType | undefined>(undefined)



