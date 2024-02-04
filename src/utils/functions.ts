import Swal, { SweetAlertIcon } from "sweetalert2";

export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/i;
  return emailRegex.test(email);
};

export const infoAlertFC = (warning: string, textAlert: string, icon: SweetAlertIcon) => {
  Swal.fire({
    title: warning,
    text: textAlert,
    icon: icon,
    showCancelButton: true,
    confirmButtonText: "OK",
    confirmButtonColor: "rgb(255 10 10)",
  });
};
