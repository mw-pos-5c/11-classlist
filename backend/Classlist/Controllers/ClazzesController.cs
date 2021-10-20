#region usings

using Classlist.Services;

using Microsoft.AspNetCore.Mvc;

#endregion

namespace Classlist.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClazzesController : ControllerBase
    {
        #region Constants and Fields

        private readonly ClazzesService clazzesService;

        #endregion

        public ClazzesController(ClazzesService clazzesService)
        {
            this.clazzesService = clazzesService;
        }

        [HttpGet]
        public IActionResult GetClazzes(int id)
        {
            return Ok(clazzesService.GetClazzs());
        }
    }
}
