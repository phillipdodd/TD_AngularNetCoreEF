using AngularNetCoreEF.API.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace AngularNetCoreEF.API.Controllers
{
    [ApiController]
    public class WidgetController : ControllerBase
    {
        private IWidgetData _widgetData;

        public WidgetController(IWidgetData widgetData)
        {
            _widgetData = widgetData;
        }

        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult AddWidget(Widget widget)
        {
            _widgetData.AddWidget(widget);
            string uri = HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + widget.Id;
            return Created(uri, widget);
        }

        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult GetAllWidgets()
        {
            return Ok(_widgetData.GetAllWidgets());
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public IActionResult GetWidget(Guid id)
        {
            Widget widget = _widgetData.GetWidget(id);
            
            if (widget != null)
            {
                return Ok(widget);
            }

            return NotFound($"Widget with id {id} not found.");
        }

        [HttpPatch]
        [Route("api/[controller]/{id}")]
        public IActionResult UpdateWidget(Guid id, Widget widget)
        {
            Widget existingWidget = _widgetData.GetWidget(id);

            if (existingWidget != null)
            {
                widget.Id = existingWidget.Id;
                _widgetData.UpdateWidget(widget);
                return Ok(widget);
            }

            return NotFound($"Widget with id {id} not found.");
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public IActionResult DeleteWidget(Guid id)
        {
            Widget widget = _widgetData.GetWidget(id);

            if (widget != null)
            {
                _widgetData.DeleteWidget(widget);
                return Ok(widget);
            }

            return NotFound($"Widget with id {id} not found.");
        }

    }
}
