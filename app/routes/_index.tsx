import type { MetaFunction } from "@remix-run/node";

import { Welcome } from "~/components/Welcome/Welcome";
import { ColorSchemeToggle } from "~/components/ColorSchemeToggle/ColorSchemeToggle";

import { SITE_TITLE, SITE_DESCRIPTION } from "~/config/constants";

export const meta: MetaFunction = () => {
    return [
        {
            title: `${SITE_TITLE}`
        },
        {
            name: "description",
            content: SITE_DESCRIPTION,
        },
        {
            tagName: "link",
            rel: "noopener noreferrer",
        }

    ];
};

export default function Index() {
  return (
    <div>
      <Welcome />
      <ColorSchemeToggle />
    </div>
  );
}
