export const field = (value, validation) => ({
  value,
  validation,
  validationMessage: ""
});

export const taskTemplate = id => ({
  id: field(id, /^.+$/),
  taskName: field("Task " + id, /^.+$/),
  bestCase: field(0, /^\d+$/),
  mostLikely: field(0, /^\d+$/),
  worstCase: field(0, /^\d+$/),
  estimate: field(0, /^\d+$/)
});
