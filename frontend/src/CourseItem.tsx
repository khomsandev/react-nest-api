import { Course } from './interfaces'

type CourseItemProps = {
    course : Course,
}

const CourseItem  = (props: CourseItemProps) => {
    const course: Course = props.course;

    return (
        <li>{course.number} - {course.title}</li>
    )

}

export default CourseItem