namespace sol.API.DTO.model
{
    public class cardcs
    {

        public int Id { get; set; }

        public string Titel { get; set; } = null!;

        public string Description { get; set; } = null!;

        public string UrlImage { get; set; } = null!;

        public string? UrlLogo { get; set; }
    }
}
