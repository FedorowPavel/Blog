import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {useNotificationCenter} from "react-toastify/addons/use-notification-center";
import {toast} from "react-toastify";
import {useEffect} from "react";
import {SerializedError} from "@reduxjs/toolkit";

export function useToast(error: FetchBaseQueryError | SerializedError| undefined, data: unknown) {
  const { notifications, clear, markAllAsRead, markAsRead } = useNotificationCenter();

  const showErrorToast = (error:  FetchBaseQueryError) => {
    toast.error(error.status + ' - ' + (error.data as {message: string})!.message,
      {
        position: toast.POSITION.TOP_RIGHT
      });
  };

  const showSuccessToast = () => {
    toast.success('Success',
      {
        position: toast.POSITION.TOP_RIGHT
      });
  };

  useEffect(() => {
    if(data) {
      showSuccessToast()
    }
    if(error) {
      showErrorToast(error as FetchBaseQueryError)
    }
  }, [error, data])

  return { notifications, clear, markAllAsRead, markAsRead }
}
