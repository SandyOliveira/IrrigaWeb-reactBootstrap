export function openMainRequest(isOpen) {
  console.log(isOpen);
  return {
    type: "@main/OPEN_MAIN_REQUEST",
    payload: { isOpen },
  };
}
