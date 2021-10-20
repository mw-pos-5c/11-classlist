#nullable disable

namespace ClasslistDb
{
    public class Student
    {
        public int Age { get; set; }

        public Clazz Clazz { get; set; }
        public int? ClazzId { get; set; }
        public string Country { get; set; }
        public string Email { get; set; }
        public string Firstname { get; set; }
        public string Gender { get; set; }
        public int Id { get; set; }
        public string Lastname { get; set; }
        public bool Registered { get; set; }
    }
}
