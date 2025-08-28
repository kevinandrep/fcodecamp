import { Link } from "../Links.jsx";
export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://imgs.search.brave.com/6yx3NPuIAZdCtHLJE3OwWQl9Ntv1FgkZc4NFBiPIzXU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Yy/MTEvaW1hZ2VzLzYv/NmUvRjIxMV9CYW5u/ZXJfMjAyNS5qcGcv/cmV2aXNpb24vbGF0/ZXN0L3NjYWxlLXRv/LXdpZHRoLWRvd24v/OTAwP2NiPTIwMjUw/ODA2MjI0ODIz"
          alt="Foto de kevin"
        ></img>
      </div>
      <p>Esta es una pagina de f211 para crear un clon de react router</p>
      <Link to="/">Ir a home</Link>
    </>
  );
}
