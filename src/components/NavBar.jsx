import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <h4>Rayzerk</h4>
      <ul>
        <li>
          <a href="#">Auriculares</a>
        </li>
        <li>
          <a href="#">Monitores</a>
        </li>
        <li>
          <a href="#">Gabinetes</a>
        </li>
      </ul>
      <CartWidget/>
    </>
  );
};


