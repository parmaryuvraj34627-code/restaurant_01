import { useState } from "react";

/**
 * Custom hook for handling form state and validation
 * @param {object} initialValues - Initial form values
 * @param {function} validate - Optional validation function
 */
export default function useForm(initialValues, validate = null) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (validate) {
      const validationErrors = validate({ ...values, [name]: value });
      setErrors(validationErrors);
    }
  };

  // Handle form submission
  const handleSubmit = (callback) => (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (validate) {
      validationErrors = validate(values);
      setErrors(validationErrors);
    }

    // Only call callback if no errors
    if (Object.keys(validationErrors).length === 0) {
      callback(values);
    }
  };

  // Reset form to initial values
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
