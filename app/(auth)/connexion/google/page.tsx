import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({}: Props) {
    return (
        <div>
            <h2>Bienvenue sur la page connexion avec google !</h2>
            <Link href="/articles" className="lien">Voir les articles</Link>
        </div>
    )
}