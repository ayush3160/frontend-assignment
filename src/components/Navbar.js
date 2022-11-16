export default function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "white", borderBottom: "1px solid whitesmoke" }}
    >
      <a class="navbar-brand mx-3" href="#" style={{ fontSize: "30px" }}>
        Cuvette
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <button
        className="btn btn-outline-secondary"
        style={{ marginLeft: "70%",width : "200px",fontSize : "20px" }}
      >
        <img
          src="https://previews.123rf.com/images/anwarsikumbang/anwarsikumbang1502/anwarsikumbang150200446/36649713-man-avatar-user-picture-cartoon-character-vector-illustration.jpg"
          width="20%"
          style={{float : "left"}}
        />
        <span className="my-auto">Siddhart Jain</span>
      </button>
    </nav>
  );
}
