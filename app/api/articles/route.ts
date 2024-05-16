import { NextResponse } from "next/server";

const getData = async () => {
  const res = await fetch("http://localhost:3000/articles");
  const data = await res.json();
  return data;
};

export async function GET(req: Request) {
  const data = await getData();
  return NextResponse.json({
    message: "Données recuperées avec succes depuis nextjs api",
    data,
  });
}

export async function POST(req: Request) {
  const { titre, contenu, auteur } = await req.json();

  if (!titre || !contenu || !auteur)
    return NextResponse.json({ message: "Veuillez remplir tous les champs" });

  const article = {
    id: "" + Math.floor(Math.random() * 1000) + "",
    titre: titre,
    contenu: contenu,
    auteur: auteur,
    date: new Date(),
  };

  await fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  });

  return NextResponse.json({messsage: "Article ajouté avec succes", data: article});
}
