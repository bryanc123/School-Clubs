import { useState, useEffect } from 'react';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/students")
            .then(response => response.json())
            .then(data => {
                setStudents(data);
                console.log(data);
            });
    }, []);

    return (
        <section className="students">
            <div className="students-container">
                <h2>Students</h2>
                <div>{students.map(student => (
                    <div key={student._id} className="student">
                        <h3>{student.firstName} {student.lastName}</h3>
                        <div className="student-description">
                            <p>Grade {student.grade}</p>
                        </div>
                    </div>
                ))}</div>
            </div>
        </section>
    );
}

export default Students;