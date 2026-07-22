import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/Header/Header";
import Flyer from "@/components/features/stage/Flyer";
import Detail from "@/components/features/stage/Detail";

type Props = {
  params: {
    id: string;
  };
};

export default async function StageDetail({ params }: Props) {
  return (
    <>
      <Header />

      <Flyer params={params} />
      <Detail params={params} />

      <Footer />
    </>
  );
}
