const field = (value, type) => ({
  value,
  type,
  validationMessage: ""
});

export const inputTypes = {
  STRING: {
    validation: /^.+$/,
    errorMessage: "Field is expected to be not empty"
  },
  NUMBER: {
    validation: /^[0-9.]+$/,
    errorMessage: "Field is expected to be numeric and not empty"
  }
};

export const taskTemplate = id => ({
  id: field(id, "STRING"),
  taskName: field("Task " + id, "STRING"),
  bestCase: field(0, "NUMBER"),
  mostLikely: field(0, "NUMBER"),
  worstCase: field(0, "NUMBER")
});

export const taskRowFields = {
  id: { placeholder: "ID", size: "1", disabled: true },
  taskName: { placeholder: "Task Name", size: "3" },
  bestCase: { placeholder: "Best Case", size: "2", type: "number" },
  mostLikely: { placeholder: "Most Likely", size: "2", type: "number" },
  worstCase: { placeholder: "Worst Case", size: "2", type: "number" }
};

export const calculateEstimate = task =>
  (parseFloat(task.bestCase.value) +
    parseFloat(task.mostLikely.value) * 4 +
    parseFloat(task.worstCase.value)) /
  6.0;
