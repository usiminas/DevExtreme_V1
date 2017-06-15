using DevExtreme.MVC.Helpers;
using DevExtreme.MVC.Models;
using DevExtreme.MVC.Service;
using DevExtreme.MVC.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Controllers
{
    public class BaseController<T>: Controller
    {

        public virtual ActionResult Index()
        {
            return View();
        }

        public JsonResult Remove(int item)
        {
            return Json(new BaseService<T>().Remove(item), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Save(T item)
        {
            return Json(new BaseService<T>().Save(item), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Find()
        {
            return Json(new BaseService<T>().Find(), JsonRequestBehavior.AllowGet);
        }
    }
}