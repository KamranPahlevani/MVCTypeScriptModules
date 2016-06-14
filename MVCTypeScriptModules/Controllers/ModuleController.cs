using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCTypeScriptModules.Controllers
{
    public class ModuleController : Controller
    {
        // GET: Module
        public ActionResult GlobalModule()
        {
            return View();
        }

        public ActionResult InternalModule()
        {
            return View();
        }

        public ActionResult ExtendingInternalModule()
        {
            return View();
        }

        public ActionResult SeparatingInternalModule() 
        {
            return View();
        }

        public ActionResult ModuleDependencies()
        {
            return View();
        }
    }
}