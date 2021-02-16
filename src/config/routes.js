import { pages } from "../features/books";

const { BooksPage: HomePage, SingleBookPage } = pages;

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
