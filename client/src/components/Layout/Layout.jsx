import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout(props) {

  function scrollToTop() {
    window.scrollTo(0, 0)
  }
  scrollToTop();

  return (
    <div className="layout">
      <Nav user={props.user} />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}
