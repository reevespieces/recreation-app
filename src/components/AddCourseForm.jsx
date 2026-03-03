import { useReducer, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addcourse.css";

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
  <div className="add-course-container">
    <form onSubmit={handleSubmit} className="add-course-form">
      <h2 className="add-course-title">Add Course</h2>

      <label htmlFor="name" className="add-course-label">
        Course Name
      </label>

      <input
        ref={inputRef}
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
        className="add-course-input"
      />

      <button
        type="submit"
        disabled={disabled}
        className="add-course-button"
      >
        Add Course
      </button>

      {error && <p className="add-course-error">{error}</p>}
      {success && <p className="add-course-success">{success}</p>}
    </form>
  </div>
);
};

export default AddCourseForm;