import produce from "immer";

const INITIAL_STATE = {
  name: null,
  textarea: null,
  selectCultura: null,
  selectSensor: null,
};

export default function sectors(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@auth/SECTORS_IN_REQUEST": {
        // draft.loading = true;
        break;
      }

      default:
    }
  });
}
