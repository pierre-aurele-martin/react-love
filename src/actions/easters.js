export const EASTER_VALIDATION = 'EASTER_VALIDATION';
export const INCREMENT_ALERT = 'INCREMENT_ALERT';
export const RESET_ALERT = 'RESET_ALERT';

export const validateEaster = (easter) => ({ type: EASTER_VALIDATION, easter });

export const incrementAlert = () => ({type: INCREMENT_ALERT});

export const resetAlert = () => ({ type: RESET_ALERT });
