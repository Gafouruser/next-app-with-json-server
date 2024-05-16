import Link from "next/link";
import React from "react";
import "../../globals.css";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <h2>Bienvenue sur la page connexion !</h2>
      <Link href="/connexion/google" className="lien">Se connecter avec google !</Link><br />
      <Link href="/Dashboard" className="lien">Voir le Dashbord</Link><br />
    </div>
  );
}
