import { useEffect } from "react";
import { ShortenUrlApiService } from "app/src/api-services/shorten-url/shorten-url-api-service";
import { useParams } from "react-router-dom";

function redirectTo(link: string): void {
  window.location.href = link;
}

export default function ShortUrlRedirectComponent() {
  const { nanoid } = useParams();

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      ShortenUrlApiService.getShortUrl(nanoid as string).then((response) => {
        redirectTo(response.data.url);
      });
    }
    return () => {
      ignore = true;
    };
  }, []);

  return <h1>Redirecting....</h1>;
}
