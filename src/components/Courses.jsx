const Courses = ({ courses }) => {
    return (
        <div>
            <h3>Courses</h3>

            {courses.map((course, index) => (
                <div className="card" key={index}>
                    <p>{course.name}</p>
                </div>
            ))}

        </div>
    );
};

export default Courses;