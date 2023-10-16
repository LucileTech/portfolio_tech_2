import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "about",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Stack",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Projects",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    icon: DocumentTextIcon,
    name: "Reviews",
    target: "_blank",
    element: "",
  },
];

export default routes;
