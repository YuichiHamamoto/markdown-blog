import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Page.css";
import { InstagramEmbed } from "react-social-media-embed";

interface Props {
  fileName: string;
}
function Page(props: Props) {
  const [content, setContent] = useState("");
  useEffect(() => {
    console.log(props.fileName);
    import(`../markdowns/${props.fileName}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <div className="page">
      <ReactMarkdown
        children={content}
        components={{
          h6: (props) => <InstagramEmbed url={props.children?.toString() ?? ""} />,
        }}
      />
    </div>
  );
}

export default Page;
