import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Hero as HeroUi } from "@ecorp/ui-lib";

import { MGNL_HOST, MGNL_ROOT, wifTheme } from "../../../constants/app";
import { formatPageLink, jcrMultiFieldToArray } from "../../util";

interface HeroButton extends Wif.MgnlNode {
  text: string;
  link: string;
  type: "primary" | "secondary";
}
interface HeroProps {
  text: string;
  image: Wif.MgnlNode;
  buttons: Wif.MgnlNode;
}

export const Hero:React.FC<HeroProps> = ({
  text,
  image,
  buttons,
}) => {
  const router = useRouter();

  const imageSrc = String(MGNL_HOST) + String(image["@link"]);
  const buttonObjects: HeroButton[] = jcrMultiFieldToArray(buttons);
  const buttonLinks = buttonObjects.map((b: HeroButton) => {
    const link = formatPageLink(b.link, router.isPreview);
    let backgroundColor, color;

    switch (b.type) {
    case "secondary":
      backgroundColor = wifTheme.color.white;
      color = wifTheme.color.primary;
      break;
    case "primary":
    default:
      backgroundColor = wifTheme.color.primary;
      color = wifTheme.color.white;
    }

    return (
      <Link href={link} passHref key={b.text}>
        <a>
          <Button text={b.text} backgroundColor={backgroundColor} color={color} />
        </a>
      </Link>
    );
  });

  return (
    <div>
      <HeroUi
        text={text}
        textColor={wifTheme.color.white}
        backgroundImageSrc={imageSrc}
        buttons={buttonLinks}
      />
    </div>
  );
};
