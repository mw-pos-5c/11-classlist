using ClasslistDb;

namespace Classlist.DTOs
{
    public class StudentDto
    {
        public int Id { get; set; }
        public int Age { get; set; }
        public int? ClazzId { get; set; }
        public string Lastname { get; set; }
        public string Firstname { get; set; }
        public bool Registered { get; set; }

        public static StudentDto From(Student student)
        {
            return new StudentDto
            {
                Id = student.Id,
                Age = student.Age,
                Firstname = student.Firstname,
                Lastname = student.Lastname,
                Registered = student.Registered,
                ClazzId = student.ClazzId
            };
        }
    }
}
