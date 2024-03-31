import { FormEvent, useEffect, useState } from "react";
import { ShortenUrlApiService } from "app/src/api-services/shorten-url/shorten-url-api-service";
import { IShortUrl } from "app/src/models/short-url/short-url.model";

function addProtocolToUrl(url: string) {
  if (!url.match(/^(http|https):\/\//)) {
    return "https://" + url;
  }
  return url;
}
function isValidURL(url: string) {
  const urlRegex =
    /^(ftp|http|https)?(:\/\/)?(www\.)?[a-zA-Z0-9-.]+(\.[a-zA-Z]{2,})+(\S+)?$/;
  return urlRegex.test(url);
}

export default function ShortUrlFormComponent() {
  const [url, setUrl] = useState("");
  const [shortUlrs, setShortUrls] = useState([] as IShortUrl[]);
  const [isCopied, setIsCopied] = useState({} as { [id: number]: boolean });
  const [isLoading, setIsLoading] = useState(true as boolean);
  const [isUrlValid, setIsUrlValid] = useState(true as boolean);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      ShortenUrlApiService.getAllShortUlrs()
        .then((response) => {
          setShortUrls(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
    return () => {
      ignore = true;
    };
  }, []);

  function handleOnChangeInput(e: FormEvent<HTMLInputElement>): void {
    setIsUrlValid(true);
    setUrl(e.currentTarget.value);
  }

  function handleOnClickShorten(): void {
    if (!isValidURL(url)) {
      setIsUrlValid(false);
      return;
    }

    ShortenUrlApiService.createShortUrl(addProtocolToUrl(url)).then(
      (response) => {
        const { shortUrl } = response.data;
        setShortUrls([...shortUlrs, shortUrl]);
      }
    );
  }

  function handleOnClickCopyLink(shortUrl: IShortUrl): void {
    navigator.clipboard.writeText(window.location.host + "/" + shortUrl.nanoid);
    setIsCopied({
      ...isCopied,
      [shortUrl.id]: true,
    });
  }

  function handleOnClickDelete(shortUrlToDelete: IShortUrl): void {
    ShortenUrlApiService.deleteShortUrl(shortUrlToDelete.id).then(
      (response) => {
        setShortUrls(
          shortUlrs.filter((shortUrl) => shortUrl.id != shortUrlToDelete.id)
        );
      }
    );
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <h1>URL shortener</h1>
          <input onChange={handleOnChangeInput} />
          <button style={{ marginLeft: "8px" }} onClick={handleOnClickShorten}>
            Shorten
          </button>
          {!isUrlValid ? (
            <p style={{ color: "red" }}>
              We'll need a valid URL, like "exampl.co/your-url"
            </p>
          ) : (
            <></>
          )}
          <h2> Your short URLs </h2>
          {shortUlrs.map((shortUrl) => (
            <div>
              <p style={{ fontWeight: "bold" }}>{shortUrl.url} : </p>
              <a style={{ marginRight: "8px" }} href={"/" + shortUrl.nanoid}>
                {window.location.host}/{shortUrl.nanoid}
              </a>
              <button
                style={{ marginRight: "8px" }}
                onClick={() => handleOnClickCopyLink(shortUrl)}
              >
                Copy link
              </button>
              <button
                style={{ marginRight: "8px", color: "red" }}
                onClick={() => handleOnClickDelete(shortUrl)}
              >
                Delete
              </button>
              {isCopied[shortUrl.id] ? (
                <span style={{ color: "green" }}>Link copied</span>
              ) : (
                <></>
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
}
