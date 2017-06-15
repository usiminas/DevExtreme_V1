using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Caching;

namespace DevExtreme.MVC.Helpers
{
    public class CacheHelper
    {
        public static object GetCache(string key)
        {
            object obj = null;

            if (System.Web.HttpContext.Current.Cache[key] != null)

                obj = System.Web.HttpContext.Current.Cache[key] as object;

            return obj;
        }

        public static void AddCache(string key, object obj, DateTime time)
        {

            RemoveCache(key);

            if (obj != null)
            {

                System.Web.HttpContext.Current.Cache.Add(key, obj, null, time, Cache.NoSlidingExpiration, CacheItemPriority.Normal, null);

            }

        }

        public static void RemoveCache(string key)
        {
            if (GetCache(key) != null)

                System.Web.HttpContext.Current.Cache.Remove(key);
        }
    }
}