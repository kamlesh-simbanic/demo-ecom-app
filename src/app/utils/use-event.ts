const useEvent = () => {
  const listen = (event: any, callback: any) => {
    document.addEventListener(event, (e) => callback(e.detail));
  };
  const dispatch = (event: any, data: any) => {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  };
  const remove = (event: any, callback: any) => {
    document.removeEventListener(event, callback);
  };

  return { listen, dispatch, remove };
};

export default useEvent;
