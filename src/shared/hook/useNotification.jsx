/* eslint-disable react/prop-types */
import { toast } from "react-hot-toast";
import { NotificationToast } from "../components/Notification";

export const useNotification = () => {
  const notify = (type, title, message) => {
    toast.custom(
      (t) => (
        <NotificationToast
          message={message}
          title={title}
          toast={t}
          type={type}
        />
      ),
      {
        position: "top-right",
        duration: 5000,
      },
    );
  };

  return {
    notify,
  };
};
