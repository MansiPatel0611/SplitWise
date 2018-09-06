using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalSplitWise.SystemHub
{
    public class MySystemHub:Hub
    {
    public Task SendToAll()
    {
      return Clients.All.SendAsync("send");
    }
  }
}
