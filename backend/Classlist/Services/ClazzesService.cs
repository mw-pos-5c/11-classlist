#region usings

using System.Collections.Generic;
using System.Linq;

using Classlist.DTOs;

using ClasslistDb;

#endregion

namespace Classlist.Services
{
    public class ClazzesService
    {
        #region Constants and Fields

        private readonly ClasslistContext db;

        #endregion

        public ClazzesService(ClasslistContext db)
        {
            this.db = db;
        }

        public IEnumerable<ClazzDto> GetClazzs()
        {
            return db.Clazzs.Select(c => ClazzDto.From(c));
        }
    }
}
