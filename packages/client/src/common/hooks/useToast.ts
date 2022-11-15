import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {useNotificationCenter} from "react-toastify/addons/use-notification-center";
import {toast} from "react-toastify";
import {useEffect} from "react";
import {SerializedError} from "@reduxjs/toolkit";

export function useToast(error: FetchBaseQueryError | SerializedError| undefined, data?: any) {
  const { notifications, clear, markAllAsRead, markAsRead } = useNotificationCenter();

  const showErrorToast = (error:  FetchBaseQueryError) => {
    toast.error((error.data as {message: string})!.message,
      {
        position: toast.POSITION.TOP_RIGHT
      });
  };

  const showSuccessToast = () => {
    const toastMessage =  data?.message ? data?.message : 'Success';
    toast.success(toastMessage,
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

  return { notifications, clear, markAllAsRead, markAsRead, showSuccessToast, showErrorToast}
}
