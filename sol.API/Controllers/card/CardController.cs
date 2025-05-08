using Microsoft.AspNetCore.Mvc;
using sol.API.Entities;
using System.Net.WebSockets;

namespace sol.API.Controllers.card
{
    [ApiController]
    [Route("api/[controller]")]

    public class CardController : Controller
    {
        private readonly OhStudioContext _context;
        public CardController(OhStudioContext context)
        {
            _context = context;
        }
        [HttpPost("AddCard")]
        public async Task<IActionResult> AddCard([FromForm] DTO.Model.CardDto card, IFormFile ImageFile)
        {
            if (ImageFile != null && ImageFile.Length > 0)
            {
                // Ensure directory exists
                var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "./images/");
                if (!Directory.Exists(uploadPath))
                {
                    Directory.CreateDirectory(uploadPath);
                }

                // Unique file name
                var uniqueFileName = $"{Guid.NewGuid()}_{ImageFile.FileName}";
                var filePath = Path.Combine(uploadPath, uniqueFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await ImageFile.CopyToAsync(stream);
                }

                // Build accessible URL path
                var request = HttpContext.Request;
                var baseUrl = $"{request.Scheme}://{request.Host}";
                card.UrlImage = $"{baseUrl}/images/{uniqueFileName}";
            }

            var cardEntity = new Entities.Card
            {
                
                Titel = card.Titel,
                UrlImage = card.UrlImage,
                CompanyName = card.companyName,
                Description = card.Description
            };

            _context.Cards.Add(cardEntity);
            await _context.SaveChangesAsync();

            return Ok(card);
        }


        [HttpGet("GetAllCard")]
        public ActionResult GetAllCard()
        {

            var cards = (from cd in _context.Cards        // this is select orm query to fetch data from data base ;
                        select new DTO.Model.CardDto
                        {
                            Titel = cd.Titel,
                            companyName = cd.CompanyName,
                            Description = cd.Description,
                            UrlImage = cd.UrlImage
                        }
                        ).ToList();
            return Ok(cards);


        }
    }

}
