import {FieldValues, UseFormWatch} from "react-hook-form";
import {useEffect} from "react";
import {setDataToSessionStorage} from "../../../../common/utils/sessionStorageUtils";

export function useRegistrationFormDataChange<T extends FieldValues>(watch: UseFormWatch<T>, storageKey: string) {
  useEffect(() => {
    setDataToSessionStorage(watch(), storageKey)
  }, [watch()])
}
