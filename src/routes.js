import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Suratmasuk from "views/examples/SuratMasuk.jsx";
import Icons from "views/examples/Icons.jsx";
import Suratkeluar from "views/examples/SuratKeluar.jsx";
import Suratkeputusan from "views/examples/SuratKeputusan.jsx";

var routes = [
  {
    //Tables
    path: "/SuratMasuk",
    name: "Surat Masuk",
    icon: "ni ni-chat-round text-default",
    component: Suratmasuk,
    layout: "/admin"
  },
  {
    //SuratKeluar
    path: "/SuratKeluar",
    name: "Surat Keluar",
    icon: "ni ni-send text-pink",
    component: Suratkeluar,
    layout: "/admin"
  },
  {
    //SuratKeputusan
    path: "/SuratKeputusan",
    name: "Surat Keputusan",
    icon: "ni ni-paper-diploma text-orange",
    component: Suratkeputusan,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  }
  /*,
  {
    path: "/index",
    name: "Index",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },

  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },

  
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }*/
];
export default routes;
