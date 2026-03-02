import { useReducer, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

const initialState = {
  values: { name: "" },
  error: "",
  success: "",
  isSubmitting: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        values: { ...state.values, name: action.payload },
        error: "",
      };

    case "START_SUBMIT":
      return { ...state, isSubmitting: true, error: "", success: "" };

    case "SUBMIT_SUCCESS":
      return {
        ...state,
        success: "Course added!",
        isSubmitting: false,
        values: { name: "" },
      };

    case "SUBMIT_ERROR":
      return {
        ...state,
        error: action.payload,
        isSubmitting: false,
      };

    default:
      return state;
  }
};

const AddCourseForm = ({ addCourse }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { values, error, success, isSubmitting } = state;
  const { name } = values;

  const navigate = useNavigate();
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    dispatch({ type: "SET_VALUE", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "START_SUBMIT" });

    const cleanedName = stripTags(trimCollapse(name));

    if (!cleanedName) {
      dispatch({
        type: "SUBMIT_ERROR",
        payload: "Course name cannot be empty.",
      });
      return;
    }

    try {
      addCourse({ id: Date.now(), name: cleanedName });
      dispatch({ type: "SUBMIT_SUCCESS" });

      setTimeout(() => {
        navigate("/");
      }, 800);
    } catch (err) {
      dispatch({
        type: "SUBMIT_ERROR",
        payload: "Something went wrong.",
      });
    }
  };

  const disabled = !trimCollapse(name) || isSubmitting;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Course Name</label>
      <br />
      <input
        ref={inputRef}
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
      />
      <br />
      <br />

      <button type="submit" disabled={disabled}>
        Add Course
      </button>

      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};

export default AddCourseForm;