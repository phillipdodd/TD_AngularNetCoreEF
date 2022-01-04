using AngularNetCoreEF.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AngularNetCoreEF.API.WidgetData
{
    public class SqlWidgetData : IWidgetData
    {
        private WidgetContext _widgetContext;

        public SqlWidgetData(WidgetContext widgetContext)
        {
            _widgetContext = widgetContext;
        }

        public Widget AddWidget(Widget widget)
        {
            widget.Id = Guid.NewGuid();
            _widgetContext.Widgets.Add(widget);
            _widgetContext.SaveChanges();
            return widget;
        }

        public Widget GetWidget(Guid id)
        {
            return _widgetContext.Widgets.Find(id);
        }

        public List<Widget> GetAllWidgets()
        {
            return _widgetContext.Widgets.ToList();
        }

        public Widget UpdateWidget(Widget widget)
        {
            Widget existingWidget = _widgetContext.Widgets.Find(widget.Id);
            if (existingWidget != null)
            {
                existingWidget.Name = widget.Name;
                existingWidget.Active = widget.Active;
                
                _widgetContext.Widgets.Update(existingWidget);
                _widgetContext.SaveChanges();
            }
            return widget;
        }

        public void DeleteWidget(Widget widget)
        {
            _widgetContext.Widgets.Remove(widget);
            _widgetContext.SaveChanges();
        }
    }
}
