using Microsoft.AspNetCore.Mvc;
using sol.API.Entities;
using System.Net.WebSockets;

namespace sol.API.Controllers.card
{
    [ApiController]
    [Route("api/controller")]
    public class CardController : Controller
    {
        private readonly OhStudioContext _context;
        public CardController(OhStudioContext context)
        {
            _context = context;
        }
        [HttpPost("AddCard")]
        public ActionResult AddCard(DTO.model.cardcs card)
        {
            Entities.Card cardEntity = new Entities.Card();
            cardEntity.Id = card.Id;
            cardEntity.Titel = card.Titel;
            cardEntity.UrlImage = card.UrlImage;
            cardEntity.UrlLogo = card.UrlLogo;
            cardEntity.Description = card.Description;

            _context.Cards.Add(cardEntity);
            _context.SaveChanges(); // save on database // dont allow to skip 
               

            return Ok(card);
        }

        [HttpGet("GetAllCard")]
        public ActionResult GetAllCard()
        {

            var card = (from cd in _context.Cards        // this is select orm query to fetch data from data base ;
                        select new DTO.model.cardcs
                        {
                            Titel = cd.Titel,
                            UrlLogo = cd.UrlLogo,
                            Description = cd.Description,
                            UrlImage = cd.UrlImage
                        }
                        ).ToList();
            return Ok(card);


        }
    }

}
