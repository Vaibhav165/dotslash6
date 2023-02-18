import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useToast() {
  const toastProp = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  const notify = (type, message) => {
    if (type === "success") {
      toast.success(message, toastProp);
    } else if (type === "error") {
      toast.error(message, toastProp);
    } else if (type === "info") {
      toast.info(message, toastProp);
    }
  };

  return notify;
}

export default useToast;
