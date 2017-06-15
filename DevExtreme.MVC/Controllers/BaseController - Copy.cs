using DevExtreme.MVC.Helpers;
using DevExtreme.MVC.Models;
using DevExtreme.MVC.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Controllers
{
    public class BaseController : Controller
    {
        public virtual ActionResult Index()
        {
            return View();
        }

        public JsonResult Remove(int item)
        {
            Retorno retorno = new Retorno();

            retorno.Error = 0;
            retorno.MsgError = "O registro foi removido com sucesso.";

            return Json(retorno, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Save(GridViewModel item)
        {
            Retorno retorno = new Retorno();

            retorno.Error = 0;
            retorno.MsgError = "O registro foi salvo com sucesso.";

            return Json(retorno, JsonRequestBehavior.AllowGet);

        }
        public JsonResult Find()
        {
            Retorno retorno = new Retorno();

            List<GridViewModel> lst = new List<GridViewModel>();

            for (int i = 0; i < 30; i++)
            {
                lst.Add(new GridViewModel()
                {
                    ID = (i + 1),
                    CompanyName = "CompanyName " + (i + 1),
                    Address = "Address " + (i + 1),
                    City = "City " + (i + 1),
                    State = "State " + (i + 1),
                    Zipcode = "Zipcode " + (i + 1),
                    Phone = "Phone " + (i + 1),
                    Fax = "Fax " + (i + 1),
                    Website = "Website " + (i + 1)
                });
            }

            //CacheHelper.AddCache("Gridview", lst, DateTime.Now.AddMinutes(10));

            retorno.Object = lst;
            retorno.Error = 0;

            return Json(retorno, JsonRequestBehavior.AllowGet);
        }
    }
}