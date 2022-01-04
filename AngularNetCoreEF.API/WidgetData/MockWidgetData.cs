using AngularNetCoreEF.API.Models;
using System;
using System.Collections.Generic;

namespace AngularNetCoreEF.API.WidgetData
{
    public class MockWidgetData : IWidgetData
    {
        private List<Widget> widgets = new List<Widget>() 
        { 
            new Widget()
            {
                Id = Guid.NewGuid(),
                Name = "Widget One"
            },
            new Widget()
            {
                Id = Guid.NewGuid(),
                Name = "Widget Two"
            }
        };

        public Widget AddWidget(Widget widget)
        {
            widget.Id = Guid.NewGuid();
            widgets.Add(widget);
            return widget;
        }

        public void DeleteWidget(Widget widget)
        {
            widgets.Remove(widget);
        }

        public Widget UpdateWidget(Widget widget)
        {
            Widget existingWidget = GetWidget(widget.Id);
            existingWidget.Name = widget.Name;
            existingWidget.Active = widget.Active;
            return existingWidget;
        }

        public Widget GetWidget(Guid id)
        {
            return widgets.Find(x => x.Id == id);
        }

        public List<Widget> GetAllWidgets()
        {
            return widgets;
        }
    }
}
