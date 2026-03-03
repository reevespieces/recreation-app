import { useReducer, useRef, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

const initialState = {
  values: { name: "", description: "" },
  error: "",
  isSubmitting: false,
  success: "",
};

// Simple reducer similar to your profile form
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        values: { ...state.values, [action.field]: action.payload },
        error: "",
      };
    case "START_SUBMIT":
      return { ...state, isSubmitting: true, error: "" };
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        success: "Event added!",
        isSubmitting: false,
        values: { name: "", description: "" },
      };
    case "SUBMIT_ERROR":
      return { ...state, error: action.payload, isSubmitting: false };
    default:
      return state;
  }
};

const AddEventForm = ({ onAddEvent }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { values, error, success, isSubmitting } = state;
  const { name, description } = values;

  const navigate = useNavigate();
  const location = useLocation();
  const selectedDate = location.state?.selectedDate || new Date().toISOString().split("T")[0];

  const inputRef = useRef(null);
  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_VALUE", field: name, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "START_SUBMIT" });

    const cleanedName = stripTags(trimCollapse(name));
    const cleanedDesc = stripTags(trimCollapse(description));

    if (!cleanedName) {
      dispatch({ type: "SUBMIT_ERROR", payload: "Event name cannot be empty." });
      return;
    }

    try {
      onAddEvent({ name: cleanedName, description: cleanedDesc, date: selectedDate });
      dispatch({ type: "SUBMIT_SUCCESS" });

      setTimeout(() => {
        navigate("/calendar");
      }, 800);
    } catch (err) {
      dispatch({ type: "SUBMIT_ERROR", payload: "Something went wrong." });
    }
  };

  const disabled = !trimCollapse(name) || isSubmitting;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Event Name</label>
      <input
        ref={inputRef}
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={handleChange}
        maxLength={200}
      />

      <button type="submit" disabled={disabled}>Add Event</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default AddEventForm;