using ClasslistDb;

namespace Classlist.DTOs
{
    public class ClazzDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public static ClazzDto From(Clazz clazz)
        {
            return new ClazzDto
            {
                Id = clazz.Id,
                Name = clazz.Name
            };
        }
    }
}
