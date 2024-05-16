import { NextResponse } from "next/server";

type RouteParams = {
  params: {
    id: string;
  };
};

const getOneArticle = async (id: string) => {
  const res = await fetch(`http://localhost:3000/articles/${id}`);
  const data = await res.json();
  return data;
};

export async function GET(req: Request, { params }: RouteParams) {
  const data = await getOneArticle(params.id);
  return NextResponse.json({
    message: "Données recuperées avec succes depuis nextjs api",
    data,
  });
}

export async function PUT(req: Request, { params }: RouteParams) {
  const { titre, contenu, auteur } = await req.json();

  const article = await getOneArticle(params.id);

  const nouvelArticle = {
    ...article,
    titre: titre || article.titre,
    contenu: contenu || article.contenu,
    auteur: auteur || article.auteur,
  };

  await fetch(`http://localhost:3000/articles/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nouvelArticle),
  });

  return NextResponse.json({
    messsage: `Article ${params.id} modifié avec succes`,
    data: nouvelArticle,
  });
}

export async function DELETE(req: Request, { params }: RouteParams) {
  await fetch(`http://localhost:3000/articles/${params.id}`, {
    method: "DELETE",
  });

  return NextResponse.json({
    message: `Article avec l'id ${params.id} supprimé avec succes`,
  });
}
