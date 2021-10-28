#region usings

using System.Collections.Generic;
using System.Linq;

using Classlist.DTOs;

using ClasslistDb;

#endregion

namespace Classlist.Services
{
    public class StudentsService
    {
        #region Constants and Fields

        private readonly ClasslistContext db;

        #endregion

        public StudentsService(ClasslistContext db)
        {
            this.db = db;
        }

        public IEnumerable<StudentDto> GetAll(int classId)
        {
            return db.Students.Where(s => s.ClazzId == classId).OrderBy(student => student.Lastname).Select(s => StudentDto.From(s));
        }
        

        public bool SetAge(int id, int age)
        {
            Student student = db.Students.FirstOrDefault(s => s.Id == id);
            if (student == null) return false;
            student.Age = age;
            db.SaveChanges();
            return true;
        }
        
        public bool SetClazz(int id, int clazzId)
        {
            Student student = db.Students.FirstOrDefault(s => s.Id == id);
            if (student == null) return false;
            student.ClazzId = clazzId;
            db.SaveChanges();
            return true;
        }
    }
}
