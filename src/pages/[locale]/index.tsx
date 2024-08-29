import type { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { locale: 'nl' } }, { params: { locale: 'en' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = params?.locale as string;

  return {
    props: { locale },
  };
};

export default function Page2({ locale }: { locale: string }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Page 2 - {locale}</h1>
    </main>
  );
}
