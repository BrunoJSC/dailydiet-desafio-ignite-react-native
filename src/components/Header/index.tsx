import { Avatar, Container } from "./style";

import Logo from "@assets/Logo.svg";
import AvatarCircle from "@assets/Avatar.png";

export function Header() {
  return (
    <Container>
      <Logo />
      <Avatar source={AvatarCircle} />
    </Container>
  );
}
