import { Bell, CheckCircle, Info, X, XCircle } from "lucide-react";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { toast as globalToast } from "react-hot-toast";

function getIcon(type) {
  switch (type) {
    case "success": {
      return <CheckCircle className="h-6 w-6 text-green-400" />;
    }
    case "warning": {
      return <Bell className="h-6 w-6 text-amber-500" />;
    }
    case "error": {
      return <XCircle className="h-6 w-6 text-red-500" />;
    }
    default: {
      return <Info className="h-6 w-6 text-gray-500" />;
    }
  }
}

export const NotificationToast = forwardRef((props, forwardedRef) => {
  const { toast, type, title, message } = props;
  const onDismiss = () => {
    globalToast.dismiss(toast.id);
  };

  return (
    <div
      ref={forwardedRef}
      className={"flex w-full flex-col items-center space-y-4 sm:items-end"}
    >
      <div className="pointer-evenflex sm:items-endts-auto ring-opacity-5 w-full max-w-sm flex-col items-center space-y-4 overflow-hidden rounded-lg bg-white ring-1 shadow-lg ring-black">
        <div className="p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">{getIcon(type)}</div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-neutral-500">{title}</p>
              <p className="mt-1 text-sm text-gray-500">{message}</p>
            </div>
            <div className="ml-4 flex flex-shrink-0">
              <button
                className="focus:ring-primary-600 inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                type="button"
                onClick={onDismiss}
              >
                <span className="sr-only">Close</span>
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

NotificationToast.propTypes = {
  toast: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  type: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
};

NotificationToast.displayName = "NotificationToast";
