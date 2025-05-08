using System.Diagnostics.CodeAnalysis;

namespace sol.API.DTO.Model
{
    public class CardDto
    {
       

        public string Titel { get; set; } = null!;

        public string Description { get; set; } = null!;


        public string? UrlImage{ get; set; }


        public string companyName { get; set; } = null!;
    }
}
