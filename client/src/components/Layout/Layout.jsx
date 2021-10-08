import Nav from "../Nav/Nav"

export default function Layout(props) {
  return (
    <div className='layout'>
      <Nav user={props.user} />
      <div className="layout-children">
        {props.children}
      </div>
    </div>
  )
}
