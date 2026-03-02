import AddCourseForm from "../components/AddCourseForm.jsx";
import Wrapper from "../components/Wrapper.jsx";

const AddCoursePage = ({ addCourse }) => {
  return (
    <Wrapper id="add-course">
      <h2>Add Course</h2>
      <AddCourseForm addCourse={addCourse} />
    </Wrapper>
  );
};

export default AddCoursePage;