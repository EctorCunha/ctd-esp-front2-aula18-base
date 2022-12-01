// Podemos alterar a implementação para nossa própria biblioteca de alertas, graças ao princípio SOLID de inversão de dependência.
const useAlert = () => {
  const dispatchSuccessAlert = (message: string) => {
    alert(`SUCCESS: ${message}`);
  };

  const dispatchErrorAlert = (message: string) => {
    alert(`ERROR: ${message}`);
  };

  return {
    dispatchSuccessAlert,
    dispatchErrorAlert,
  };
};

export default useAlert;
