import Link from "next/link";
import React from "react";
import "../globals.css";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/articles/1" className="lien">
            Article 1
          </Link>
        </li>
        <li>
          <Link href="/articles/2" className="lien">
            Article 2
          </Link>
        </li>
        <li>
          <Link href="/articles/3" className="lien">
            Article 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
