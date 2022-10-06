import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import Seo from "../../components/Seo";

// Obejct가 아니기 때문에 type으로 선언문으로 배열값의 type을 지정해준다.
type routerParam = [string, string];

export default function Detail({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // 최초 렌더링시 HTML 파일만 내려오기 때문에 useRouter 값을 제대로 불러오지 못한다 그렇기 때문에 초기에 빈배열 추가해준다.
  const [title, id] = (params || []) as routerParam;
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

interface IServerParams extends ParsedUrlQuery {
  params: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params as IServerParams;

  return {
    props: params,
  };
};
