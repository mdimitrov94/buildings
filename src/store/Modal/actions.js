export const OPEN_MODAL = "Open modal";
export const CLOSE_MODAL = "Close modal";

export const actions = {
  openModal: () => {
    return { type: OPEN_MODAL };
  },
  closeModal: () => {
    return { type: CLOSE_MODAL };
  },
};
