using System;
using System.Collections.Generic;

namespace sol.API.Entities;

public partial class Card
{
    public int Id { get; set; }

    public string Titel { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string? UrlImage { get; set; }

    public string CompanyName { get; set; } = null!;
}
