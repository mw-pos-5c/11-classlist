#region usings

using Classlist.Services;

using Microsoft.AspNetCore.Mvc;

#endregion

namespace Classlist.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        #region Constants and Fields

        private readonly StudentsService studentsService;

        #endregion

        public StudentsController(StudentsService studentsService)
        {
            this.studentsService = studentsService;
        }

        [HttpGet]
        public IActionResult GetStudents(int classId)
        {
            return Ok(studentsService.GetAll(classId));
        }

        [HttpGet]
        [Route("{id}/age")]
        public IActionResult SetAge(int id, int age)
        {
            if (studentsService.SetAge(id, age))
            {
                return Ok();
            }

            return BadRequest();
        }
        
        [HttpGet]
        [Route("{id}/clazz")]
        public IActionResult SetClazz(int id, int clazzId)
        {
            if (studentsService.SetClazz(id, clazzId))
            {
                return Ok();
            }

            return BadRequest();
        }
    }
}
