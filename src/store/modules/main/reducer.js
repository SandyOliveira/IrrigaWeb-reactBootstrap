import produce from "immer";

const INITIAL_STATE = {
  isOpen: false,
};

export default function main(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@main/OPEN_MAIN_REQUEST": {
        draft.isOpen = !action.payload.isOpen;
        break;
      }

      default:
    }
  });
}
