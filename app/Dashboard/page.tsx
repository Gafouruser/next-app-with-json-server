import React from 'react'
import "../globals.css";
import Link from 'next/link';

type Props = {}

export default function page({}: Props) {
    return (
        <div>
            <p>Bienvenue sur la page Dashbord !</p>
            <Link href="/articles" className="lien">Voir les articles</Link><br />
        </div>
    )
}