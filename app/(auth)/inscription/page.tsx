import Link from "next/link";
import React from "react";
import "../../globals.css";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <h2>Bienvenue sur la page inscription !</h2>
      <Link href="/connexion" className="lien">Se connecter</Link>
    </div>
  );
}
