import { HomePage, SingleBookPage } from "../features/books";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/books/:bookId",
    component: SingleBookPage,
  },
  {
    path: "/login",
    component: () => <div>Login page</div>,
  },
];

export default routes;
