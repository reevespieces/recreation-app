import AddCourseForm from "../components/AddCourseForm.jsx";
import Wrapper from "../components/Wrapper.jsx";

const AddCoursePage = ({ addCourse }) => {
  return (
    <Wrapper id="add-course">
      <AddCourseForm addCourse={addCourse} />
    </Wrapper>
  );
};

export default AddCoursePage;