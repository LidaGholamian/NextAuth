import { unauthorized } from "next/navigation";
import { Course } from "./_types/courses.types";

export const getCourses = async (): Promise<Course[]> => {
  const response = await fetch(
    "https://general-api.classbon.com/api/identity/courses",
    {
      headers: {
        authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0cmluZyIsImZ1bGxOYW1lIjoi2LnZhNuMINix2LbYpyDYsdi22KfbjNuMIiwicGljIjoiaHR0cDovL21pbmlvLWNsYXNzYm9uLmRhcmt1YmUuYXBwL2NsYXNzYm9uLXdlYnNpdGUvaW1hZ2VzL29yaWdpbmFsL3Byb2ZpbGUvZmMyN2Q5YWMtZTJkYi00NGIwLWI3ODktZGVhMjhiOTAwMDg3LndlYnAiLCJuYmYiOjE3ODQzOTgyMjcsImV4cCI6MTc4NDM5ODI4NywiaWF0IjoxNzg0Mzk4MjI3LCJpc3MiOiJjbGFzc2JvbiJ9._w_NcQL9uCE12Kj3rpVy0O8gWxit3l9owa24Lt0xqks"}`,
      },
    },
  );
    if (response.status === 401){
        unauthorized();
    }
  return await response.json();
};

export default async function Page() {
  const courses = await getCourses();
  return (
    <>
      {courses.map((course) => (
        <p className="my-2 text-lg" key={`course-${course.title}`}>
          {course.title}
        </p>
      ))}
    </>
  );
}
