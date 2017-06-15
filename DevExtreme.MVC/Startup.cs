using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DevExtreme.MVC.Startup))]
namespace DevExtreme.MVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //ConfigureAuth(app);
        }
    }
}
