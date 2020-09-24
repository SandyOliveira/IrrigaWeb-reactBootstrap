export function openMainRequest(isOpen) {
  return {
    type: "@main/OPEN_MAIN_REQUEST",
    payload: { isOpen },
  };
}
