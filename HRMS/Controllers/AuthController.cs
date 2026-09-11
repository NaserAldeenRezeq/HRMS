using HRMS.DBContexts;
using HRMS.Dtos.Auth;
using HRMS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace HRMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // Dependency Injection
        private readonly HRMSContext _dbContext;

        public AuthController(HRMSContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpPost]
        public IActionResult Login(LoginDto loginDto) 
        {
            var user = _dbContext.Users.FirstOrDefault(x => x.Username.ToUpper() == loginDto.Username.ToUpper());
            if(user == null)
            {
                return Unauthorized("Invalid Username Or Password"); // 401
            }

            // password -> Admin@123 == $2a$11$lMJyM1RLnNfCKhRwCzelQe9EZ6jXR4YgjlJByPmhNKXvTxouSOmeu => salt, Cost Factor
            if (BCrypt.Net.BCrypt.Verify(loginDto.Password, user.HashedPassword))
            {
                return Unauthorized("Invalid Username Or Password"); // 401
            }

            // Token => JwtBearer
            var token = GenerateJwtToken(user);

            return Ok(token);
        }

        private string GenerateJwtToken(User user)
        {
            // Claims => User Info
            var claims = new List<Claim>();
            claims.Add(new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())); // Key / Value
            claims.Add(new Claim(ClaimTypes.Name, user.Username)); // Key / Value

            // Role => Admin, HR, Developer...
            if (user.IsAdmin)
            {
                // Admin
                claims.Add(new Claim(ClaimTypes.Role, "Admin"));
            }
            else 
            {
                // Employee => Position
            }




            // Secert Key

            return "";
            

        }

    }
}
