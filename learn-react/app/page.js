import "./globale.css";
function Profile() {
  return (
    <img className="m-3 inline-block" src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
  )
}

export default function Gallery() {
  return (
    <section className="p-2">
      <h1 className="mx-3">Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}