import Link from "next/link";

export default function SideNav() {

  return <div class="sidenav">
    <ul class="nav flex-column">
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="/admin/requests">Trial Requests</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="/admin/trial-firms">Firms on Trial</Link>

      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Another Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Disabled</a>
      </li>
    </ul>
  </div>

}