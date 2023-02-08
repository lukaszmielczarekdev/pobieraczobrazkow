import { useState } from "react";

const UrlInput = () => {
  const [url, setUrl] = useState<string | null>("");

  const handleImageDownload = (e: any) => {
    e.preventDefault();

    if (url) {
      alert(`download request: ${url}`);
    } else {
      alert("Empty input");
    }
  };

  return (
    <section>
      <p>Paste an image URL:</p>
      <form onSubmit={handleImageDownload}>
        <label>
          URL:
          <input
            type="text"
            name="url"
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default UrlInput;
