﻿using System;
using System.Threading.Tasks;
using Api.ViewModels.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Api.Services.Interfaces;

namespace Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SignInController : ControllerBase
    {
        private readonly IUserService _userService;

        public SignInController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<ActionResult<UserVm>> RegisterUser(UserVm userVm)
        {
            try
            {
                userVm = _userService.AddOrUpdate(userVm);
                string text = @$"Cześć, {userVm.firstName}

Cieszymy się że dołączyłeś/dołączyłaś do klientów naszej kawiarni. Mamy nadzieję, że zasmakuje Ci nasza kawa.

Zapraszamy,
Super Kawiarnia XYZ";

                //  Email nie działa
                //await _userService.SendEmail(userVm, text, "Rejestracja w Super Kawiarnia XYZ");
            }
            catch (Exception e)
            {
                return StatusCode(406, new { message = e.Message, status = 406});
            }

            return StatusCode(201, new { user = userVm, status = 201 });
        }
    }
}
