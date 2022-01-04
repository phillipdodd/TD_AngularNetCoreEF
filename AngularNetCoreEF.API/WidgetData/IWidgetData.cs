using System;
using System.Collections.Generic;

namespace AngularNetCoreEF.API.Models
{
    public interface IWidgetData
    {
        Widget AddWidget(Widget widget);
        Widget GetWidget(Guid id);
        List<Widget> GetAllWidgets();
        Widget UpdateWidget(Widget widget);
        void DeleteWidget(Widget widget);
    }
}
