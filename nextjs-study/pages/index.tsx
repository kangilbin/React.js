import Seo from "./../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

interface IMoviProp {
  id: number;
  original_title: string;
  poster_path: string;
}

export default function Home({ results }: { results: IMoviProp[] }) {
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div>
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title} </a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// async는 선택 사항
export async function getServerSideProps() {
  /* Server에서 돌아간다. */
  // 프론트엔드는 이미 브라우저에 url이 있지만 서버에는 없기 때문에 주소를 추가해준다.
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();

  // Object를 return 한다.
  return {
    // props라는 key를 가지고 있음
    props: {
      // 원하는 데이터를 아무거나 넣을 수 있다.
      results,
    },
  };
}
