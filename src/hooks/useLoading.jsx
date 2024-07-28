import { useState } from "react";





const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  // mostrar loading
  const showLoading = () => {
    setIsLoading(true);
  };

  // ocultar loading
  const hideLoading = () => {
    setIsLoading(false);
  };

  return { isLoading, showLoading, hideLoading };
};

export default useLoading;
