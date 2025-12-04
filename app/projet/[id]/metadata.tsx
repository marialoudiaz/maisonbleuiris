export async function generateMetadata({ params }) {
  const { id } = params;

  return {
    title: `Projet ${id} – Maison Bleu Iris`,
    alternates: {
      canonical: `https://www.maisonbleuiris.fr/projet/${id}`,
    },
  };
}
