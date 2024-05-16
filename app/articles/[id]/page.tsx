import Link from "next/link";
import React from "react";
import "../../globals.css";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    id: number;
  };
};

const getData = async (id: number) => {
  const res = await fetch(`http://localhost:3000/articles/${id}`);
  const data = await res.json();
  return data;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const article = await getData(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: article.titre,
    description: article.contenu,
    authors: [
      {
        name: article.auteur,
      },
    ],
    openGraph: {
      images: [article.lienImage, ...previousImages],
    },
  };
}

export default async function page({ params }: Props) {
  const article = await getData(params.id);
  return (
    <div>
      <p>Vous etes sur l'article {params.id}</p>
      <div className="container">
        <h1 className="titre">{article.titre}</h1>
        <p>{article.contenu}</p>
        <figure>
          <Image
            src={article.lienImage}
            alt="Image de l'article"
            width={500}
            height={250}
            className="w-full object-cover"
            priority={true}
          />
        </figure>
        <div className="mt-20 ml-20 text-orange-500">
          <span>{article.auteur}</span>
        </div>
      </div>
      <br />
      <Link href="/articles" className="lien">
        Revenir sur la page articles
      </Link>
      <br />
      <Link href="/connexion" className="lien">
        Revenir sur la page d'acceuil
      </Link>
      <br />
      <Link href="/" className="lien">
        Deconnexion
      </Link>
    </div>
  );
}
