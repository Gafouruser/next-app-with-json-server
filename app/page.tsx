import Link from "next/link";
import "./globals.css";
import Button from "./ui/Button";
import Image from "next/image";
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Cours nextjs | Acceuil',
  description: 'The description of nextjs courses',
};

const getData = async () => {
  const res = await fetch("http://localhost:3001/api/articles", {
    next: {
      revalidate: 0,
    },
  });
  const data = await res.json();
  return data;
};

type Article = {
  id: number;
  titre: string;
  contenu: string;
  auteur: string;
  date: string;
  user_id: number;
  lienImage: string;
};

export default async function Home() {
  const {data:articles} = await getData();
  return (
    <main className="p-10">
      <h2>Bonjour tout le monde !</h2>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
        doloremque similique ut perspiciatis dolor cupiditate provident, hic
        voluptatum dolorum ab quos maxime quaerat tempora, modi pariatur
        voluptatibus quibusdam quis, nam voluptas. Numquam excepturi hic quaerat
        sit. Praesentium maxime delectus iure, recusandae aperiam nam ipsam
        natus reiciendis quidem eius ad dolore.
      </p>
      <br />
      <Link href="/inscription" className="lien">
        S'inscrire
      </Link>
      <br />
      <br />
      <Link href="/connexion" className="lien">
        Se connecter
      </Link>
      <br />
      <br />
      <Button />

      <div className="flex gap-4 flex-wrap">
        {articles.map((article: Article) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={article.id}>
            <figure>
              <Image
                src={article.lienImage}
                alt="Image de l'article"
                width={250}
                height={250}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{article.titre}</h2>
              <div className="card-actions justify-end">
                <Link
                  href={`/articles/${article.id}`}
                  className="btn btn-primary"
                >
                  Visitez l'article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />

      <Link href="/articles/create" className="btn btn-succces">
        Ajouter un article
      </Link>
      <br />
      <br />
    </main>
  );
}
