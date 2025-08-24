import { toast as notify } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

const toastOptions = {
  position: "top-right",
  theme: "colored",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
};

const toastMap = {
  success: notify.success,
  error: notify.error,
  info: notify.info,
  warning: notify.warning,
};

export const toast = (type, text) => {
  const showToast = toastMap[type] || notify;
  showToast(text, toastOptions);
};
